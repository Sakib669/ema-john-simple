import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (param) => {
        const newCart = [...cart, products];
        setCart(newCart);
    };

    console.log(cart);

    return (
        <div className='shop-container
        '>
            <div className="products-container">
                {
                    products.map((product) => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h5 className='summary-title'>Order Summary</h5>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};


export default Shop;