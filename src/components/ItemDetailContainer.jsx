import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from '../utils/customFetch';
import { product } from "../utils/products";

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        customFetch(3000, product)
            .then(result => setItem(result))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <ItemDetail product={item} />
        </>
    );
}