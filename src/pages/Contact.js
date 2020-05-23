import React from 'react';
import './style.css'
import ContactCard from '../components/ContactCard';

function Contact(){
    return(
        <div className='containerWrapper'>
            <h2 className='uk-text-center'>Contact</h2>
            <div className='contactContainer uk-child-width-1-2@m' uk-grid='true'>
                <ContactCard />
            </div>
        </div>
    );
}

export default Contact;