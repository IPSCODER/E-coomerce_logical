import React from 'react'
import "./product.css"
import { useStateValue } from './StateProvide'


const Product = (props) => {

    const [state,dispatch] = useStateValue();

  const addToBasket = () =>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:props.id,
        title:props.title,
        image:props.img,
        price:props.price,
        rating:props.rating
      },
    });
  };

  return (
    <>
    <div className='product' >
        <div className="product__info">
            <p>{props.title}</p>
            <p className="product__price">{props.price}</p>
            <div className="product__rating">{Array(props.rating).fill().map((_,i)=>(
                <p>🌟</p>
            ))}</div>
        </div>
        <img src={props.img} alt="" />
        <button onClick={addToBasket} >Add to Basket</button>
    </div>
    </>
  )
}

export default Product