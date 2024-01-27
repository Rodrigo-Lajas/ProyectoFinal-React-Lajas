// import Item from '../Item/Item'

// const ItemList = ( { productos } ) => {
//     return(
//         <div className='container'>
//             {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
//         </div>
//     )
// }

// export default ItemList;

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {
    return (
        <Row className='mt-4'>
            {productos.map((prod) => (
                <Col key={prod.id} md={4} className='mb-4'>
                    <Item producto={prod} />
                </Col>
            ))}
        </Row>
    );
};

export default ItemList;