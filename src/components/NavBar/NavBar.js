// import CartWidget from "../CartWidget/CartWidget";
// import { Link } from 'react-router-dom';


// const NavBar = () => {
//     return (
//         <nav>
//             <div>
//                 <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <h6>
//                         Tienda de Telefonía movil
//                     </h6>
//                 </Link>

//                 <div style={{ marginLeft: 'auto' }}>
//                     <Link to="/category/Samsung">Samsung</Link>
//                     <Link to="/category/Motorola">Motorola</Link>
//                     <Link to="/category/Xiaomi">Xiaomi</Link>
//                     <Link to="/category/ZTE">ZTE</Link>
//                     <CartWidget />
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default NavBar;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Link to="/" className="navbar-brand">
                <h6 style={{ color: 'white' }}>Tienda de Telefonía móvil</h6>
            </Link>

            <Nav className="ms-auto">
                <Link to="/category/Samsung" className="nav-link">
                    Samsung
                </Link>
                <Link to="/category/Motorola" className="nav-link">
                    Motorola
                </Link>
                <Link to="/category/Xiaomi" className="nav-link">
                    Xiaomi
                </Link>
                <Link to="/category/ZTE" className="nav-link">
                    ZTE
                </Link>
                <CartWidget className="nav-link"/>
            
            </Nav>

        </Navbar>
    );
};

export default NavBar;