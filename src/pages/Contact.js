import React from 'react';
import './style.css'
import ContactForm from '../components/ContactForm';

function Contact(){
    return(
        <div className='contactWrapper'>
            <h2 className='uk-text-center Contact'>Contact</h2>
            <div className='contactContainer uk-child-width-1-2@m' uk-grid='true'>
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;