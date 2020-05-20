import React from 'react';
import './style.css'
import Contact from '../components/Contact';

function Contact(){
    return(
        <div className='container'>
            <h1 className='uk-text-center'>Contact</h1>
            <div className='contactContainer uk-child-width-1-2@m' uk-grid='true'>
                <Contact />
            </div>
        </div>
    );
}

export default Contact;