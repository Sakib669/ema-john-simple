import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Card from '../Card/Card';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    let [cart, setCart] = useState([]);

    let removeProduct = (productKey) => {
        let newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };

    useEffect( () => {
        let savedCart = getDatabaseCart();
        let productKeys = Object.keys(savedCart);
        let cartProducts = productKeys.map( key => {
            let product = fakeData.find( pd => pd.key === key) ;
            product.quantity= savedCart[key];
            return product;
        });
        setCart(cartProducts);
        // console.log(cartProducts);
    }, [])
    
    return (
        <div className='twin-container'>
            <div className='product-container'>
            {
                cart.map(pd => <ReviewItems product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItems> )
            }
            </div>
            <div className='cart-container'>
                <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Review;