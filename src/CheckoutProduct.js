import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider';
const CheckoutProduct = ({id,image,title,price,rating,hidebtn}) => {
  // eslint-disable-next-line no-unused-vars
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id,
      title:title
    })
  }
  return (
    <div className='checkoutProduct'>
      <img src={image} className='checkoutProduct_image' alt='true'/>
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
            {Array(rating).fill().map(()=>(<p>⭐</p>))}
        </div>
        {hidebtn?<></>:<button onClick={removeFromBasket}>Remove from Basket</button>}
      </div>
    </div>
  )
}

export default CheckoutProduct
