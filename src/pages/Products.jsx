import React, {useState, useEffect} from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
        }


        getProducts();

    }, [])

    return (
        <div>Products</div>
    )
}

export {Products}