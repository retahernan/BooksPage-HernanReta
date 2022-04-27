import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export default function CartContext({ children }) {
    const [cart, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const [priceCart, setPriceCart] = useState(0);

    function addItem(item, quantity) { // agregar cierta cantidad de un ítem al carrito
        const indexItem = cart.findIndex((cartItem) => cartItem.item.id === item.id);
        if (indexItem !== -1) {
            const newCart = [...cart];
            newCart[indexItem].item.cant = newCart[indexItem].item.cant + item.cant;
            setCart(newCart);
        } else {
            setCart([...cart, { item }]);
        }
    }

    function removeItem(itemId) { // Remover un item del cart usando su id
        setCart(cart.filter((cartItem) => cartItem.item.id !== itemId))
    }

    function clear() { // Remover todos los items
        setCart([])
    }

    useEffect(() => {
        setTotalCart(cart.reduce((totalCart, cartItem) => totalCart += cartItem.item.cant, 0));
        setPriceCart(cart.reduce((priceCart, cartItem) => priceCart += (cartItem.item.cant * cartItem.item.price), 0));
    }, [cart])

    return (
        <>
            <Context.Provider value={{ cart, setCart, addItem, removeItem, clear, totalCart, priceCart }}>
                {children}
            </Context.Provider>
        </>

    );
}