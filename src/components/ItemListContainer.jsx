import { style } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import products from '../utils/products';
import ItemList from './ItemList';
import Style from './ItemListContainer.module.css';

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true);
    customFetch(2000, 'C', products, categoryId)
      .then(result => setItems(result))
      .catch(error => console.log(error))
      .finally(() => { setLoading(false); })
  }, [categoryId])

  return (
    <div className={Style.listContainer}>
      {loading ? (
        <h1>Cargando productos.. por favor esperar al final del proceso!</h1>
      ) : (
        <ItemList products={items} />
      )}
    </div>
  );
}