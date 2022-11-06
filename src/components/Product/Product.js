import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



const Product = (props) => {
    let {name, img, seller, price, stock} = props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p><small>${price}</small></p>
                <br />
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='add-cart' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartShopping} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;