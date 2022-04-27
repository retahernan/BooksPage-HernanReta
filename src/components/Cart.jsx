import React, { useContext, useState } from 'react';
import { product } from '../utils/products';
import { Context } from './Context/CarContext';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { blue } from '@mui/material/colors';

export default function Cart() {
  const { cart, removeItem, clear, totalCart, priceCart } = useContext(Context);
  // let precioTotal = 0;

  return (
    <>
      {cart.map((prod) => {
        // precioTotal = precioTotal + (prod.item.cant * prod.item.price)
        return (
          <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={prod.item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={prod.item.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Cantidad = {prod.item.cant}  /
                        Precio = {prod.item.price.toFixed(2)} /
                        PrecioTotal = {prod.item.cant * prod.item.price.toFixed(2)}
                      </Typography>

                    </React.Fragment>

                  }
                />
                <Button variant="outlined" onClick={() => removeItem(prod.item.id)} >Remover Item</Button>
              </ListItem>
              <Divider variant="inset" component="li" />

            </List>


          </>
        )
      }
      )
      }
      <div>
        {totalCart === 0 ?
          <img src='./Assets/carritoVacio.jpg' /> :
          <List>
            <ListItem>
              <h3>Cantidad Total de items : {totalCart} / Precio Total de la Compra : {priceCart.toFixed(2)}</h3>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        }
      </div>
      <div>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => clear()}>
          Borrar carrito
        </Button>
        <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
          <Link style={{ textDecoration: 'none', color: '#1976d2' }} to="/">Seguir comprando</Link>
        </Button>
      </div>
    </>

  );
}