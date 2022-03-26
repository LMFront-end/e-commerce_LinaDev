// For Add Item to Card

const addCart = (product) => {

    return {

        type: "ADDITEM",
        payload: product
    }
}

// For Delete Item to Card

const delCart = (product) => {

    return {

        type: "DELITEM",
        payload: product
    }
}