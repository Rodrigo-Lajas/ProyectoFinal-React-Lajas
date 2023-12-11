import Item from '../Item/Item'
import Grid from '@mui/material/Grid';

const ItemList = ({products }) => {
    return (
        <Grid container spacing={2}>
            {products.map((prod) => (
                <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
                    <Item {...prod} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ItemList;