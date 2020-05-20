import React from 'react';
import './style.css';

function ContactCard() {
    return(
        <form className='uk-form-stacked uk-position-relative' uk-height-viewport='expand: true'>
            <div className='uk-margin'>
                <label className='uk-form-label uk-text-muted' for='name'>Name</label>
                <div className='uk-form-controls'>
                    <input className='uk-input' id='name' type='text' placeholder='Kelsey Williams'/>
                </div>
            </div>
            <div className='uk-margin'>
            <label className='uk-form-label uk-text-muted' for='email'>Email</label>
                <div className='uk-form-controls'>
                    <input className='uk-input' id='email' type='text' placeholder='kelseywilliams@gmail.com'/>
            </div>
            </div>
            <div className='uk-margin'>
                <label className='uk-form-label uk-text-muted' for='message'>Message</label>
                <div className='uk-form-controls'>
                    <textarea className='uk-text-normal' id='message' placeholder='Enter message...'></textarea>
                </div>
            </div>
            <button className='uk-button' id='submitBtn'>Submit</button>
        </form>
    );
}

export default ContactCard;