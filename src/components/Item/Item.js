import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import React from 'react';

const Item = ({ producto }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.image} alt={producto.name} />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                    <p>Precio: ${producto.price}</p>
                    <p>Categoria: {producto.category}</p>
                </Card.Text>
                <Link to={`/item/${producto.id}`} className='Option'>Ver Detalles</Link>
            </Card.Body>
        </Card>
    )
}

export default Item;