import { useNavigate, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Sidebar() {
    const navigate = useNavigate()

    const username = localStorage.username

    function handleLogout(event) {
        event.preventDefault()
        localStorage.clear()
        navigate('/login')
    }

    return (
        <>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="#" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none mt-4">
                        <span className="fs-5 d-none d-sm-inline">Halo, {username}</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/category" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-tag"></i> <span className="ms-1 d-none d-sm-inline">Categories</span> </Link>
                        </li>
                        <li>
                            <Link to="/register" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-card-checklist"></i> <span className="ms-1 d-none d-sm-inline">Register Admin</span></Link>
                        </li>
                        <li>
                            <a href="#" data-bs-toggle="collapse" className="nav-link px-0 align-middle" onClick={handleLogout}>
                                <i className="fs-4 bi-box-arrow-left"></i> <span className="ms-1 d-none d-sm-inline">Logout</span></a>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
        </>
    )
}