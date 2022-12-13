import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    let {productKey} = useParams();
    let pdts = fakeData.find(pdt => pdt.key === productKey);
    
    return (
        <div>
            <h1>{productKey} Detail coming sooon</h1>
            <Product  showAddToCart={true} product={pdts} >/</Product>
        </div>
    );
};

export default ProductDetail;