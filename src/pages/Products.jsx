import React, {useState, useEffect} from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    return (
        <div>Products</div>
    )
}

export {Products}