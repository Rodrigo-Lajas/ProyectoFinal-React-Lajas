import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return ( 
        <div className="container">
                <h1 className="main-title">Carrito</h1>

                {
                    carrito.map((producto) => (
                        <div key={producto.id}>
                            <img src={producto.imagen} alt={producto.name} />
                            <h3>{producto.name}</h3>
                            <p>Precio unit: ${producto.price}</p>
                            <p>Precio total: ${producto.price * producto.cantidad}</p>
                            <p>Cantidad: {producto.cantidad}</p>
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
                    <h2>El carrito no tiene productos</h2>
                }
                
            </div>
        )
}

export default Cart;