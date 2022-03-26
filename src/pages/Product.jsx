import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router';
import { Loading } from '../components/Loading';

const Product = () => {

    const {id} = useParams;
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
            </>
        )
    }


    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export {Product}