import { Link } from '@mui/material';
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>Checkout <Link to = "/Checkout">({basket?.length} items)</Link> </h1>

                <div className="payment__section">
                    <div className="payment__title"><h3>Delivery Address</h3></div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title"><h3>Review Items and Delivery:</h3></div>
                    <div className="payment__items">
                        {basket.map(item =>  (
                        <CheckoutProduct 
                        id = {item.id}  
                        image = {item.image}
                        title = {item.title}
                        price = {item.price}
                        rating = {item.rating} />)
                        )}                       
                    </div>                
                </div>

                <div className="payment__section">
                    <div className="payment__title"><h3>Payment Method</h3></div>
                    <div className="payment__details"></div>                               
                </div>


            </div>

        </div>
    )
}

export default Payment