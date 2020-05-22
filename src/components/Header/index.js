import React from "react";
import './style.css';
import Nav from '../Nav';

function Header() {
    return (
        <ul className="nav nav-tabs" >
            {/* <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Cynthia Dominguez 
                </Link>
            </li> */}
            <Nav />
           
        </ul>
    );
}

export default Header;