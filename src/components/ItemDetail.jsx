import React from "react";
import Style from "./ItemDetail.module.css";

export default function ItemDetail({ product }) {
    return (

        <div className={Style.detail}>
            <img src={product.image} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <h3>$ {product.price}</h3>
            </div>
        </div>


    );
}