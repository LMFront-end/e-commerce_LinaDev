import React, {useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
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

    
    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
    
    const ShowProducts = () => {

    return (
        <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-5" onClick={() => setFilter(data)}>All</button>
            <button className="btn btn-outline-dark me-5" onClick={() => filterProduct("men's clothing")}>Men's</button>
            <button className="btn btn-outline-dark me-5" onClick={() => filterProduct("women's clothing")}>Woman's</button>
            <button className="btn btn-outline-dark me-5" onClick={() => filterProduct("jewelery")}>Jewelery</button>
            <button className="btn btn-outline-dark me-5" onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>

        {filter.map((product)=> {

            return (
                <Fragment key={product.id}>
                    <div className="col-md-3 mb-5">
                    <div className="card h-100 text-center p-4 key={product.id}">
                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                            <p className="card-text lead fw-bold"> ${product.price}</p>
                            <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now <i className="fa fa-shopping-cart me-1"></i></Link>
                    </div>
                    </div>
                    </div>
                </Fragment>
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