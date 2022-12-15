import React from 'react';

const ReviewItems = (props) => {
    // console.log(props);
    let {name, quantity, key, price} = props.product;
    let reviewItemsStyle = {
        borderBottom:'1px lightgray solid',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px',
    }
    return (
        <div style={reviewItemsStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price: $ {price}</small></p>
            <br/>
            <button 
            className='add-cart'
            onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItems;