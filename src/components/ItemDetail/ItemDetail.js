import ItemCount from "../ItemCount/ItemCount";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                sx={{ height: 345 }}
                component="img"
                alt={name}
                image={img}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Categoría: {category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Descripción: {description}
                </Typography>
                <Typography variant="body1" color="text.primary">
                    Precio: ${price}
                </Typography>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </CardContent>
        </Card>
    );
}

export default ItemDetail;