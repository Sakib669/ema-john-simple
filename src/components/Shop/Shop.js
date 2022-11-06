import React, { useState } from 'react';
import Css from './Shop.css'
// import fakeData from './fakeData';

const Shop = () => {
    // let firstTen = fakeData.slice(0, 10);
    // let [products, setProducts] = useState(firstTen)
       
    return (
        <div className='shop-container'>
            <div className='product-container'>
            <h1>This is Shop</h1>
            {/* <h3>{products.length}</h3> */}
            <ul>
                {
                    // products.map(product => <li>{product.name}</li>)
                }
            </ul>
            </div>
            <div className='cart-container'>
                <h3>This is cart</h3>
            </div>
        </div>
    );
};

export default Shop;