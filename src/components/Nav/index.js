import { Link } from 'react-router-dom';
import './style.css';
import React from 'react';

function Nav() {
    return(
        <div>
            <nav className='uk-navbar-container uk-navbar-transparent uk-padding-large uk-padding-remove' uk-navbar='true'>
                 <div>
                    <Link className='uk-navbar-item uk-logo nameLink' to='/'>
                        Cynthia Dominguez
                        </Link>
                </div>   
                <div className='uk-navbar-rigth'>
                    <ul className='uk-navbar-nav navbarLink'>
                        <li><Link to='/' className=''>About</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;