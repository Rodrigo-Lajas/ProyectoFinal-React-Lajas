import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { BsCart } from "react-icons/bs";



const Cart = () => {
    const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)

    const {removeItem} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return ( 
        <div className="container">
                <h1 className="main-title"><BsCart /></h1>
                <br></br>
                {
                    carrito.map((producto) => (
                        <div key={producto.id}>
                            <img src={producto.image} alt={producto.name} />
                            <h3>{producto.name}</h3>
                            <p>Precio unit: ${producto.price}</p>
                            <p>Precio total: ${producto.price * producto.cantidad}</p>
                            <p>Cantidad: {producto.cantidad}</p>
                            <button onClick={() => removeItem(producto.id)}>Quitar del carrito</button>
                            <br />
                        </div>
                    ))
                }

                {  
                    carrito.length > 0 ?
                    <>
                        <h2>Precio total: ${ precioTotal() }</h2>
                        <button onClick={handleVaciar}>Vaciar</button>
                        <button><Link to="/checkout">Finalizar compra</Link></button>
                    </> :
                    <h2>El carrito esta vacio</h2>
                }
                <Link to="/" className="navbar-brand">
                <h6 style={{ color: 'primary' }}>Volver al inicio</h6>
            </Link>
            </div>
        )
}

export default Cart;