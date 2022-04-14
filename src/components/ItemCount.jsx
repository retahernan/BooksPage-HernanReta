import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function ItemCount({ valorInicial, stock }) {
    const [cant, setCant] = useState(valorInicial);

    function resta() {
        if (cant > 0) {
            setCant(cant - 1);
        }
    }

    function suma() {
        if (cant < stock) {
            setCant(cant + 1);
        }
    }

    function agrega() {
        alert(`Se agregaron ${cant} items al carrito`);
    }

    return (
        <>
            <div>
                <IconButton onClick={resta} color="error" aria-label="remove to shopping cart">
                    <DeleteForeverIcon />
                </IconButton>
                <span>{cant}</span>
                <IconButton onClick={suma} color="success" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </div>
            <div>
                <Button onClick={agrega} variant="contained" endIcon={<SendIcon />}>
                    Agregar
                </Button>
            </div>
        </>
    );
}