import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActionArea, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { product } from '../utils/products';

export default function Item({ id, name, description, category, image, price }) {
    return (
        <>
            <Card key={id} sx={{ borderRadius: 5, boxShadow: 10, maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image={image}
                        alt="green iguana"
                        
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            $ {price}
                        </Typography>
                        <Button><Link to={`/item/${id}`}>Ver detalle</Link></Button>
                    </CardContent>
                    
                </CardActionArea>
            </Card>
        </>
    )

}