import React from 'react';
import Item from './Item';
import Grid from '@mui/material/Grid';

export default function ItemList({ products }) {
    return (
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map((prods, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item {...prods} />
                </Grid>
            )
            )}
        </Grid>
    );
}