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
        let toBeAdded = product.key;
        let sameProduct = cart.find(pd => pd.key ===  toBeAdded);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            let others = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...others, sameProduct];
        }
        else{
            products.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    // debugger;
}
       
    return (
        
        <div className='twin-container'>
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