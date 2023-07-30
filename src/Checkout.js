import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';
const Checkout = () => {
  const [{basket,user}]=useStateValue();
  return (
    <>
    <Header/>
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='true'/>
        <div>
          <h2>Hello, {user?user.email.substring(0, user.email.length - 10):'Guest'}</h2>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          {basket.map((element,ind)=>(<CheckoutProduct title={element.title} rating={element.rating} image={element.image} price={element.price} id={element.id}/>))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
    </>
  )
}

export default Checkout
