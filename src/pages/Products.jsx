import React, {useState, useEffect} from 'react'
import {Loading} from '../components/Loading'


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();

    }, [])

    
const ShowProducts = () => {

    return (
        <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-5">All</button>
            <button className="btn btn-outline-dark me-5">Men's</button>
            <button className="btn btn-outline-dark me-5">Woman's</button>
            <button className="btn btn-outline-dark me-5">Jewelery</button>
            <button className="btn btn-outline-dark me-5">Electronic</button>
        </div>

        {filter.map((product, index)=> {

            return (
                <>
                    <div className="col-md-3 mb-5">
                    <div className="card h-100 text-center p-4 key={product.id}">
                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                            <p className="card-text lead fw-bold"> ${product.price}</p>
                            <a href="#" className="btn btn-outline-dark">Buy Now <i className="fa fa-shopping-cart me-1"></i></a>
                    </div>
                    </div>
                    </div>
                </>
            )
        })}
        </>
    )
}


    return (
        <div className="gallery">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        loading ? <Loading /> : <ShowProducts />
                    }
                </div>
            </div>
        </div>
    )
}

export {Products}