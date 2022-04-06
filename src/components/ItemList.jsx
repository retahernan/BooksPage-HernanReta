import React from 'react';
import Item from './Item';



export default function ItemList({ products }) {
    return (
        products.map (prods => (
            <Item key={prods.id} name={prods.name} description={prods.description} image={prods.image} price={prods.price} />
        )
    )

    );
}