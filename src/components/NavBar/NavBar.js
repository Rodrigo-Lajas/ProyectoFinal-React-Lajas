import Cartwidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <section className="hero is-info">
                <div className="hero-body">
                    <a className="navbar-item">
                        <img src="src/components/NavBar/assets/logo.png" alt="Logo"/>
                    </a>
                    <h1 className="title">E-commerce</h1>
                </div>
                <div className="navbar-menu">
                    <ul className="navbar-start">
                        <li>
                            <a className="navbar-item">Guitarras</a>
                        </li>
                        <li>
                            <a className="navbar-item">Accesorios</a>
                        </li>
                        <li>
                            <a className="navbar-item">Amplificadores</a>
                        </li>
                        <li>
                            <a className="navbar-item"><Cartwidget /></a>
                        </li>
                    </ul>
                </div>
            </section>
        </nav>
    )
}
export default NavBar