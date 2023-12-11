import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="contained" onClick={decrement} disabled={quantity === 1}>
                    -
                </Button>
                <h4 style={{ margin: '0 10px' }}>{quantity}</h4>
                <Button variant="contained" onClick={increment} disabled={quantity === stock}>
                    +
                </Button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button
                    variant="contained"
                    onClick={() => onAdd(quantity)}
                    disabled={!stock || quantity === 0}
                >
                    Agregar al carrito
                </Button>
                <Button>

                <Link to="/">Volver</Link>
                </Button>
            </div>
        </div>
    );
}

export default ItemCount;