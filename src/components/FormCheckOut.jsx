import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Context } from './Context/CarContext';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function FormCheckOut() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { cart, priceCart, buy } = useContext(Context)
    const [orderId, setOrderId] = useState("")
    const [open, setOpen] = React.useState(false);

    function sendBuyer(data) {
        const order = {
            buyer: data,
            items: cart,
            date: serverTimestamp(),
            total: priceCart
        }

        const db = getFirestore();

        const orders = collection(db, 'ventas');

        addDoc(orders, order).then(({ id }) => {
            buy()
            setOrderId(id)
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            {cart.length > 0 ? (
                <form onSubmit={handleSubmit(sendBuyer)}>
                    <h3 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "600" }}>Completa el siguiente formulario para finalizar</h3>
                    <Input type="text" name="name" placeholder="Nombre"{...register("name", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
                    {errors.name?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu Nombre</p>}

                    <Input type="text" placeholder="Apellido" {...register("LastName", { required: true, minLength: 3, maxLength: 25, pattern: /[A-Za-z]/ })} />
                    {errors.LastName?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu Apellido</p>}

                    <Input type="email" placeholder="123@123.com" {...register("Email", { required: true, min: 5, maxLength: 60, pattern: /^\S+@\S+$/i })} />
                    {errors.Email?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu Email</p>}

                    <Input type="tel" placeholder="11-xxxx-xxxx" {...register("phone", { required: true, minLength: 10, maxLength: 10, pattern: /[0-9]+/i })} />
                    {errors.phone?.type === 'required' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debes completar tu telefono</p>}
                    {errors.phone?.type === 'maxLength' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debe contener solo 10 caracteres 11-xxxx-xxxx </p>}
                    {errors.phone?.type === 'pattern' && <p style={{ textAlign: "center", color: "red", fontWeight: "600" }}>debe contener solo numeros </p>}

                    <Button type='submit' variant="outlined" startIcon={<LocalMallIcon />}>
                        Comprar
                    </Button>
                </form>)
                :
                <div>
                    <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
                        <Link style={{ textDecoration: 'none', color: '#1976d2' }} to="/">Seguir comprando</Link>
                    </Button>
                </div>}
            <div>
                {orderId === "" ? "" : (<p> su Codigo de compra es : {orderId}</p>)}
            </div>
        </div>

    )
}
