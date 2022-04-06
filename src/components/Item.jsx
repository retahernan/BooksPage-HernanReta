import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent } from '@mui/material';
import ItemCount from './ItemCount';

export default function Item({ id, name, description, image, price }) {
    return (
        <>
            <Card key={id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            $ {price}
                        </Typography>
                    </CardContent>
                    <ItemCount valorInicial={2} stock={10} />
                </CardActionArea>
            </Card>
        </>
    )

}