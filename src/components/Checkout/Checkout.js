import { useContext, useState } from "react";
import { db } from "../../Services/firebase/firebaseConfig";
import { CartContext } from "../Context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "Ordenes");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">¡Muchas gracias por su compra!</h1>
                <p>Su número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>

            </form>
            <Link to='/cart' className="CartWidget nav-link">
                <p style={{ margin: 0 }}>Volver al carrito</p>
            </Link>
        </div>
    )
}

export default Checkout;