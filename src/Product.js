import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';
const Product=({title,price,rating,image,id})=>{
    const [{basket},dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return(
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_,index)=>(<p>⭐</p>))}  
                </div>
            </div>
            <img src={image} alt='true'/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}
Product.defaultProps = {
    title: 'The Lean Startup',
    price: 19.99,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
};
export default Product;

