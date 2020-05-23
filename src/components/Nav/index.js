import { Link } from 'react-router-dom';
import './style.css';
import React from 'react';

function Nav() {
    return(
        <div>
            <nav id='navheader'
            className='uk-navbar-container uk-navbar-transparent uk-padding-large uk-padding-remove' uk-navbar='true'>
                 <div id='logoWrapper' className='uk-navbar-left uk-width-2-3@l uk-width-1-2@s'> 
                     <span id='logoType' className='uk-navbar-item uk-logo uk-light'>Cynthia Dominguez</span>
                </div>
                 {/* <div>
                    <Link className='uk-navbar-item nameLink' to='/'>Cynthia Dominguez</Link>
                </div>   */}
                <div className='uk-navbar-rigth'>
                    <ul className='uk-navbar-nav navbarLink'>
                        <li><Link to='/' className='navLinks'>About</Link></li>
                        <li><Link to='/portfolio' className='navLinks'>Portfolio</Link></li>
                        <li><Link to='/contact' className='navLinks'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;