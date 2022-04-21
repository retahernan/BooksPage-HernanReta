import Button from '@mui/material/Button';
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from './Context/CarContext';
import ItemCount from "./ItemCount";
import Style from "./ItemDetail.module.css";

export default function ItemDetail({ product }) {

    const [cant, setCant] = useState(0)

    const {addItem} = useContext(Context)

    const onAdd = (cant) => {
        setCant(cant);
        addItem({...product, cant})
    }

    return (

        <div className={Style.detail}>
            <img src={product.image} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <h3>$ {product.price}</h3>
            </div>
            <div>
                {
                    cant === 0 ?
                        <ItemCount valorInicial={0} stock={product.stock} onAdd={onAdd} /> :
                        <Button variant="outlined" ><Link style={{ textDecoration: 'none' }} to="/cart">Comprar</Link></Button>
                }

            </div>
            {/* <div>
                <Button variant="outlined" >
                    <Link style={{ textDecoration: 'none' }} to="/cart">Comprar</Link>
                </Button>
            </div> */}
        </div>



    );
}