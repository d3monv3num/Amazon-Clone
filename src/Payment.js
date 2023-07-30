/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Payment.css';
import { getBasketTotal } from './reducer';
import instance from './axios';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import {db} from './firebase_config';
const Payment = () => {
    const navigate=useNavigate();
    const [{user,basket},dispatch]=useStateValue();
    const stripe=useStripe();
    const elements=useElements();


    const [succeded,setSucceded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
      const getClientSecret = async () => {
        const response = await instance.post('/payments/create', null, {
          params: {
            total: getBasketTotal(basket) * 100 * 80,
            name:"naman anand",
            address:"chandigarh sector 47A",
          },
        });
        console.log(response);
        setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
    }, [basket,user]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
      
        try {
          const { paymentIntent, error: stripeError } = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: elements.getElement(CardElement)
              }
            }
          );
      
          if (stripeError) {
            setError(`Payment failed: ${stripeError.message}`);
            setProcessing(false);
          } else {
            const updatedBasket = basket.map((product) => ({
                ...product,
                id: uuidv4(), // Generate a unique ID for each product
              }));
            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                basket: updatedBasket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
              });
      
            setSucceded(true);
            setError(null);
            setProcessing(false);
            navigate('/orders');
            dispatch({
              type: "EMPTY_BASKET",
            });
          }
        } catch (error) {
          // Handle other errors, if any
          setError(`Payment failed: ${error.message}`);
          setProcessing(false);
        }
      };
      
    
    
    const handleChange=(e)=>{
        setDisabled(e.empty);
        setError(e.error?e.error.message:"");
    }
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Chekout (<Link to='/checkout'>{basket?.length} Items</Link>) 
            </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Backend baker street</p>
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review Items and delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map((item=>(
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                    )))}
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment_priceContainer'>
                        <p>
                            Order Total ({basket?.length} items):
                            <strong>${getBasketTotal(basket)}</strong>
                        </p>
                        <button disabled={processing||disabled ||succeded}>
                            <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                        </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
