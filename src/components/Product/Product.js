import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Product = (props) => {
    // console.log(props);
    let {name, img, seller, price, stock, key} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'> <Link to={"/product/"+key}>{name}</Link> </h4>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p><small>${price}</small></p>
                <br />
                <p><small>Only {stock} left in stock - Order soon</small></p>
                { props.showAddToCart === true && <button className='add-cart' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartShopping} />add to cart</button>}
            </div>
        </div>
    );
};

export default Product;