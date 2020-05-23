import React from 'react';

function ContactCard() {
 return(
     <form className='uk-form-stacked uk-position-relative' uk-height-viewport="expand: true">
         <div className='uk-margin'>
             <label className='uk-form-label uk-text-muted'>Name</label>
             <div className='uk-form-controls'>
                 <input className='uk-input' id='name' type='text' placeholder='Kelsey Williams' />
             </div>
         </div>
         
     </form>
 );
}

export default ContactCard;