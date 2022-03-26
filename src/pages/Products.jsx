import React, {useState, useEffect} from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

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

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-">
                        <h1>Products</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Products}