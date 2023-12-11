import ItemListContainer from '../ItemListContainer/ItemListContainer';

import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = ({id, name, img, price, stock}) => {

    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardHeader
                title={name}
            />
            <CardMedia
                sx={{ height: 345 }}
                component="img"
                alt={name}
                height="200"
                image={img}
            />
            <CardContent>
                <Typography variant="body1" color="text.primary">
                    Precio: ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Stock disponible: {stock}
                </Typography>
            </CardContent>
            <Button component={Link} to={`/item/${id}`} variant="contained" color="primary">
                Ver Detalles
            </Button>
        </Card>
    );
}

export default Item;