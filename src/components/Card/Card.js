import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    let cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const productElement = cart[i];
        total = total + productElement.price * productElement.quantity;
        // debugger;
        
    }

    let shipping = 0;
    if(shipping > 100){
        shipping = 0;
    }
    else if (total > 50) {
        shipping = 6.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    let tax = (total * 10 / 100).toFixed(2);
    let grandTotal = (total + shipping + Number(tax)).toFixed(2);

    let grandFixed = num => {
        let precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {grandFixed(total)}$ </p>
            <p><small>Shipping & Handling : {shipping}</small></p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price: {grandTotal} </p>
            <Link to={"/review"}><button className='add-cart'>Review Order</button></Link>
        </div>
    );
};

export default Card;