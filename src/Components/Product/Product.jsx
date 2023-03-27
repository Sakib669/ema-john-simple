import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { img, name, price, seller, ratings, quantity } = props.product;
    return (
        <div>
            <div className="card">
                <img src={img} alt="" />
                <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price:${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}Star</p>
                </div>
                <button className='btn-cart'>Add to Cart 
                </button>
            </div>
        </div>
    );
};

export default Product;