import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);
    }

    const removeItem = (ItemId) =>{
        const cartUpdated = carrito.filter(prod => prod.id !== ItemId)
        setCarrito(cartUpdated)
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={{ 
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            removeItem,
            vaciarCarrito
        } }>
            { children }
        </CartContext.Provider>
    )
}