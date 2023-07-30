import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import { Routes,Route } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import {auth} from './firebase_config';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise=loadStripe('pk_test_51NZ4NWSHcQyDFQT9bGQv1RdC1sZ1M8qfGvze5MnO7wATxdw7mRw6OL6oDrxA3obMKB8wLnbd6rIZ5qIbx7XJ8EgA001YfTXhY9');

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/orders' element={<Orders/>}/>
        <Route exact path='/payment' element={<Elements stripe={promise}>
          <Payment/>
          </Elements>}/>
      </Routes>
    </div>
  );
}

export default App;
