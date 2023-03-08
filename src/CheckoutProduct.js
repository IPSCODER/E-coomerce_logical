import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "./StateProvide";

const CheckoutProduct = (props) => {

  const [{basket},dispatch] = useStateValue();


  const removeFromBasket = () =>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:props.id
    })
  }

  return (
    <>
      <div className="checkoutProduct">
        <img
          src={props.image}
          alt=""
          className="checkoutProduct__image"
        />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
           {props.title}
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="checkoutProduct__rating">
          {Array(props.rating).fill().map((_,i)=>(
            <>
            <p>🌟</p>
            </>
          ))}
          </div>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
