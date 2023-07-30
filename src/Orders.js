/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { db } from './firebase_config';
import './Orders.css';
import Order from './Order';
import { useStateValue } from './StateProvider';
import Header from './Header';
const Orders = () => {
  const [{basket,user},dispatch]=useStateValue();
  const [orders,setOrders]=useState([]);
  useEffect(()=>{
    if(user){
    db
    .collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created','desc')
    .onSnapshot(snapshot=>(
      setOrders(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    ))
  }
  },[user])
  return (
    <>
    <Header/>
    <div className='orders'>
      <h1>Your orders</h1>
      <div className='orders_order'>
        {orders?.map(order=>(
          <Order order={order}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Orders
