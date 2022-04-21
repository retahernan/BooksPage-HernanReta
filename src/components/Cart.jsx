import React, { useContext } from 'react';
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

export default function Cart() {
  const { cart, removeItem, clear, addItem } = useContext(Context);

  const onAdd = () => {
      addItem({...product})
  }

  return (
    <>
      {cart.map((prod) => {
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
                        Cantidad = {prod.item.cant}
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
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => clear()}>
          Borrar carrito
        </Button>
      </div>
    </>

  );
}