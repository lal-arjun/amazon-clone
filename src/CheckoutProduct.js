import React from 'react'
import "./checkoutproduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // dispatch an remove from basket action
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };

  // let rating = 5;
  return (
    <div class = "checkoutproduct">
      <div>
        <img  className = "checkoutproduct__image" src={image} alt="" />        
      </div>

      <div className = "checkoutproduct__info">
        <p className = "checkoutproduct__title">{title}
        </p>
        <p className="checkoutproduct__price"><small>$</small><strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">{Array(rating).fill().map((_, i) => (<p>🌟</p>))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div> 

    </div>
  )
}

export default CheckoutProduct