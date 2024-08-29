import React, { useContext, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ item }) => {
    console.log("Item recibido:", item);

    const { agregarAlCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    console.log("item detail: ", item);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    };

    return (
        <article>
            <Card className='CardItem' style={{ width: '36rem' }}>
                <Row>
                    <Col md={6}>
                        <Card.Img src={item.image} alt={item.name} />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Categoría: {item.category}</Card.Text>
                            <Card.Text>Stock: {item.stock}</Card.Text>
                            <Card.Subtitle className='mb-2 text-muted'>${item.price}</Card.Subtitle>

                            <ItemCount
                                cantidad={cantidad}
                                handleSumar={handleSumar}
                                handleRestar={handleRestar}
                                handleAgregar={() => { agregarAlCarrito (item, cantidad) }}
                            />
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </article>
    );
};

export default ItemDetail;