import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();


    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    
    // console.log(storedCart);
    // console.log(products);
    // if you need to send two things
    // return [savedCart, products];
    // another way
    // return {products, cart: savedCart};
    return savedCart;
};

export {cartProductsLoader};