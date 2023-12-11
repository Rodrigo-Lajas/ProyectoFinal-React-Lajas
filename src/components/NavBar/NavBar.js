import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';
// import 'bulma/css/bulma.min.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6">
                        Tienda de Telefonía movil
                    </Typography>
                </Link>

                <div style={{ marginLeft: 'auto' }}>
                    <Button color="inherit" component={NavLink} to="/category/Samsung">Samsung</Button>
                    <Button color="inherit" component={NavLink} to="/category/Motorola">Motorola</Button>
                    <Button color="inherit" component={NavLink} to="/category/Xiaomi">Xiaomi</Button>
                    <Button color="inherit" component={NavLink} to="/category/ZTE">ZTE</Button>
                    <CartWidget />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;