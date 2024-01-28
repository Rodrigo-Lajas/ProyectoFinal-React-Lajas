import React from 'react';
import Button from 'react-bootstrap/Button';
import { ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

    return (
        <Container>
            <ButtonToolbar>
                <ButtonGroup>
                    <Button variant='secondary' onClick={handleRestar}>-</Button>
                </ButtonGroup>
                <p>{cantidad}</p>
                <ButtonGroup>
                    <Button variant='secondary' onClick={handleSumar}>+</Button>
                </ButtonGroup>
            </ButtonToolbar>
            <Button className="agregar-al-carrito" variant='primary' onClick={handleAgregar}>Agregar al carrito</Button>
        </Container>
    )
}

export default ItemCount;