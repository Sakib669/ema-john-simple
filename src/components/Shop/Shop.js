import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    let firstTen = fakeData.slice(0, 10);
    let [products, setProducts] = useState(firstTen)
    let [cart, setCart] = useState([])


    let handleAddProduct = (product) =>{
    let newCart = [...cart, product];
    setCart(newCart);
}
       
    return (
        
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(pd => <Product product={pd}    handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Card cart={cart}></Card>
                
            </div>
        </div>
    );
};

export default Shop;