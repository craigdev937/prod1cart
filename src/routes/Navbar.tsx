import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link 
                    to={"/"} 
                    className="navbar__logo"
                >
                    Home
                </Link>
                <aside 
                    className="navbar__icon" 
                    onClick={handleClick}
                >
                    {open ? <FiX /> : <FiMenu />}
                </aside>
                <ul className={open ? 
                    "navbar__ul active" : 
                    "navbar__ul"}
                >
                    <Link 
                        to={"/"}
                        className="navbar__link"
                        onClick={closeMenu}
                    >
                        Products
                    </Link>
                    <Link 
                        to={"/cart"}
                        className="navbar__link"
                        onClick={closeMenu}
                    >
                        Cart                        
                    </Link>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


