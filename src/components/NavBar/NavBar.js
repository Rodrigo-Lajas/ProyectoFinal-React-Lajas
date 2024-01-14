import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h6>
                        Tienda de Telefonía movil
                    </h6>
                </Link>

                <div style={{ marginLeft: 'auto' }}>
                    <Link to="/category/Samsung">Samsung</Link>
                    <Link to="/category/Motorola">Motorola</Link>
                    <Link to="/category/Xiaomi">Xiaomi</Link>
                    <Link to="/category/ZTE">ZTE</Link>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;