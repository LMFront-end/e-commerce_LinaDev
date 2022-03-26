import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router';

const Product = () => {

    const {id} = useParams;
    const [product, setProduct] = useState([]);

    return (
        <div>Product</div>
    )
}

export {Product}