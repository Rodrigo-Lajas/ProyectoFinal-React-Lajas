import { useContext, useState } from "react";
import { db } from "../../Services/firebase/firebaseConfig";
import { CartContext } from "../Context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

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
        <div className="Form">
            <h1 className="main-title">Finalizar compra</h1>

            <Form className="formulario" onSubmit={handleSubmit(comprar)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="tiendadetelefoniamovil@email.com" {...register("email")} />
                        </Form.Group>
                    </Col>    
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="phone" placeholder="1234567890" {...register("telefono")} />
                        </Form.Group>
                    </Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Button className="enviar" type="submit">Comprar</Button>
                            <Link to='/cart' className="CartWidget nav-link">
                                <p style={{ margin: 0 }}>Volver al carrito</p>
                            </Link>
                        </Form.Group>
                </Row>
            </Form>

        </div>
    )
}

export default Checkout;