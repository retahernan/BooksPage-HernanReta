import React from 'react';
import Item from './Item';

export default function ItemList({ products }) {
    return (
        products.map (prods => (
            <Item {...prods} />
        )
    )

    );
}