import { style } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import products from '../utils/products';
import ItemList from './ItemList';
import Style from './ItemListContainer.module.css';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams()

  useEffect(() => {
    const db = getFirestore();
    let productsRef;
console.log(categoryId);
console.log(!categoryId);
    if (!categoryId) {
      console.log(1);
      productsRef = collection(db, 'books')
    } else {
      console.log(2);
      productsRef = query(collection(db, 'books'), where('category', '==', categoryId));
    }

    setLoading(true);

    getDocs(productsRef)
      .then(res => setItems(res.docs.map((item) => ({ id: item.id, ...item.data() }))))
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