import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router';
import { Loading } from '../components/Loading';

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        
        const getProduct = async () => {
            
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }

        getProduct();
    },[])


    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                            <i className="fa-solid fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                </div>
            </>
        )
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export {Product}