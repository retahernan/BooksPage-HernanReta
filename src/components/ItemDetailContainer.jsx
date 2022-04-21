import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from '../utils/customFetch';
import products from "../utils/products";
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const {Id} = useParams()

    useEffect(() => {
        setLoading(true);
        customFetch(0, 'I', products, Id)
            .then(result => setItem(result))
            .catch(error => console.log(error))
            .finally(() => { setLoading(false); })
    }, [])

    return (
        <>
            {loading ? (
                <h1>Cargando productos.. por favor esperar al final del proceso!</h1>
            ) : (
                <ItemDetail product={item} />
            )}
        </>
    );
}