import React from 'react'
import './Header.css';
import {BiSearch} from 'react-icons/bi';
import {TiShoppingCart} from 'react-icons/ti';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';
import { auth } from './firebase_config';
const Header = () => {
  const [{basket,user}]=useStateValue();
  const handleAuth=()=>{
    if(user)auth.signOut();
  }
  return (
    <div className='header'>
      <Link to='/'>
      <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='true' className='header_logo'/>
      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        < BiSearch className='header_searchIcon'/>
      </div>
      <div className='header_nav'>
        <Link to={!user && '/login'}>
        <div className='header_option' onClick={handleAuth}>
            <span className='header_optionLineOne'>
                Hello {user?user.email.substring(0, user.email.length - 10):'Guest'}
            </span>
            <span className='header_optionLineTwo'>
                {user?"Sign Out":"Sign In"}
            </span>
        </div>
        </Link>
        <Link to={user?'/orders':'/login'}>
        <div className='header_option'>
            <span className='header_optionLineOne'>
                Returns 
            </span>
            <span className='header_optionLineTwo'>
                & Orders
            </span>
        </div>
        </Link>
        <div className='header_option'>
            <span className='header_optionLineOne'>
                Your
            </span>
            <span className='header_optionLineTwo'>
                Prime
            </span>
        </div>
        <Link to="/checkout">
        <div className='header_optionBasket'>
          <TiShoppingCart/>
          <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
