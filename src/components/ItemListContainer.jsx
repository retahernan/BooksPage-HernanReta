import { style } from '@mui/system';
import React, { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';
import products from '../utils/products';
import ItemList from './ItemList';
import Style from './ItemListContainer.module.css';

export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(3000, products)
      .then(result => setItems(result))
      .catch(error => console.log(error))
  }, [products])

  return (
    <div className={Style.listContainer}>
      <ItemList products={items} />
    </div>
  );
}