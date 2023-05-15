import React, { useEffect, useState } from 'react';
import { getShoppingCart, addToDb, deleteShoppingCart, clearShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCreditCardAlt } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const { totalProducts } = useLoaderData();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [cart, setCart] = useState([]);
    console.log(totalProducts);

    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // const pageNumbers = [];
    // for(let i = 1; i < totalPages; i++) {
    //     pageNumbers.push(i);
    // }


    const pageNumbers = [...Array(totalPages).keys()];
    /**
     * Done: 1. Determine the total number of items:
     * TODO: 2. Decide on the number of items per page:
     * DONE: 3. Calculate the total number of pages: 
     * DONE: 4. Determine th current page:
    */

    //    useEffect(() => {
    //        fetch('http://localhost:5000/products')
    //        .then(res => res.json())
    //        .then(data => setProducts(data))
    //     }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [currentPage, itemsPerPage]);


    useEffect(() => {
        const storedCart = getShoppingCart();
        const ids = Object.keys(storedCart);


        fetch(`http://localhost:5000/productsByIds`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(cartProducts => {

                const savedCart = [];
                // step 1: get id of the added product
                for (const id in storedCart) {
                    //step 2: get product from products state by usint id
                    const addedProduct = cartProducts.find(product => product._id === id);
                    console.log('added product', addedProduct);
                    if (addedProduct) {
                        //step 3: add quantity
                        const quantity = storedCart[id];
                        console.log('adding quantity', storedCart[id]);
                        addedProduct.quantity = quantity;
                        // step 4: add the added product to the saved cart
                        savedCart.push(addedProduct);
                    }
                }
                // step 5: set the cart
                setCart(savedCart);
            })



    }, [products]);

    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        // if product does't exist in the cart , then set quantity = 1
        // if exist update the quantity by 1
        const exitst = cart.find(pd => pd._id === product._id);
        if (!exitst) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exitst.quantity = exitst.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exitst];
        }


        setCart(newCart);
        addToDb(product._id);
    };

    // console.log(cart);

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    };

    const options = [5, 10, 15, 20];
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }

    return (
        <>
            <div className='shop-container
        '>
                <div className="products-container">
                    {
                        products.map((product) => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link to='/order'>
                            <button className='btn-proceed'>
                                Review Order
                                <FontAwesomeIcon icon={faCreditCardAlt}></FontAwesomeIcon>
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
            {/* pagination */}
            <div className="pagination-buttons">
                <p>current page: {currentPage} items on per page {itemsPerPage}</p>
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={currentPage === pageNumber ? 'selected' : ''}
                        onClick={() => setCurrentPage(pageNumber)}
                    >
                        {pageNumber + 1}
                    </button>
                ))}
                <select
                    value={itemsPerPage}
                    onChange={handleSelectChange}
                >
                    {
                        options.map(option => (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    );
};


export default Shop;