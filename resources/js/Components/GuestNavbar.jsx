import { Link } from "@inertiajs/react";
import React from "react";

function GuestNavbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    
                    <div className="d-flex">
                        <Link href={route("login")} className="btn btn-outline-success me-1">Log in</Link>

                        <Link href={route("register")} className="ml-4 btn btn-outline-success">Register</Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default GuestNavbar;
