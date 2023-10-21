import { Link } from "react-router-dom"
import Swal from "sweetalert2"

export default function Navbar() {
    const handleClick = (e) => {
        e.preventDefault()
        Swal.fire('Feature coming soon')
    }

    return (
        <>
            <div className="header-block">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-transparent" data-bs-theme="dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/"><img src="/images/burgerking-logo.png" alt="" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link nav-left" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-left" to="/category-item">By Category</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-left" href="#" onClick={handleClick}>Large Order</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a href="" onClick={handleClick} className="login nav-link">Login</a>

                                    </li>
                                    <li className="nav-item">
                                        <a href="#" onClick={handleClick} className="cart nav-link"><img src="/images/burgerking-cart.png" alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}