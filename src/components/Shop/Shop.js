import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
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
    let sameProduct = newCart.filter(pd => pd.key=== product.key);
    let count = sameProduct.length;
    addToDatabaseCart(product.key, count);
}
       
    return (
        
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(pd => <Product product={pd} key={pd.key} showAddToCart={true}  handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Card cart={cart}></Card>
                
            </div>
        </div>
    );
};

export default Shop;