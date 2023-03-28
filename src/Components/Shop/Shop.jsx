import React, { useEffect, useState } from 'react';
import { getShoppingCart, addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the added product
        for(const id in storedCart){
            //step 2: get product from products state by usint id
            const addedProduct = products.find(product => product.id === id);
            // console.log('added product', addedProduct);
            if(addedProduct){
                //step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        // if product does't exist in the cart , then set quantity = 1
        // if exist update the quantity by 1
        const exitst = cart.find(pd => pd.id === product.id);
        if(!exitst){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exitst.quantity = exitst.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exitst];
        }


        setCart(newCart);
        addToDb(product.id);
    };

    // console.log(cart);

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Shop;