// import React, { useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// import NavSwitch from '../NavSwitch';
import { useState, useEffect } from 'react';

function Nav() {
    return(
        <div>
            <nav className='uk-navbar-container uk-navbar-transparent' uk-navbar='true'>
                <Link className='uk-navbar-left' to='/'>
                    Cynthia Dominguez
                    </Link>
            </nav>
        </div>
    );
}

export default Nav;