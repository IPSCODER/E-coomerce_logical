import React from 'react'
import "./checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvide';

const Checkout = () => {
  const [ {basket},dispatch] = useStateValue()
  return (
    <div className="checkout" >
      <div className="checkout__left">
        <img src="https://www.shutterstock.com/image-photo/hand-holds-megaphone-hole-wall-260nw-1944738823.jpg" alt="" className="checkOut__ad" />
        <h2 className="checkOut__title">Your shopping Basket</h2>
        {basket.map((item)=>(
          <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout