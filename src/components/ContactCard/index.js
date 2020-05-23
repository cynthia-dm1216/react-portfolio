import React from 'react';
import './style.css';

function ContactCard() {
 return(

     <form className='uk-position-center' uk-height-viewport="expand: true">
            <div className='uk-margin'>
             <label className='uk-form-label uk-text-muted'>Name</label>
             <div className='uk-form-controls'>
                 <input className='uk-input' id='name' type='text' placeholder='Kelsey Williams' />
             </div>
         </div>
            <div className='uk-margin'>
                <label className='uk-form-label uk-text-muted'>Email</label>
                <div className='uk-form-controls'>
                    <input className='uk-input' id='email' type='text' placeholder='kelseywilliams@email.com' />
                </div>
            </div>
            <div className='uk-margin'>
                <label className='uk-form-label uk-text-muted'>Message</label>
                <div className='uk-form-controls'>
                    <textarea className='uk-textarea' id='message' rows='3' placeholder='Type your message...'></textarea>
                </div>
                <button id='submitBtn' className='uk-button'></button>
            </div> 
     </form>
    
 );
}

export default ContactCard;