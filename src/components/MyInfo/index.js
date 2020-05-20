import React from 'react';
import './style.css';

function MyInfo() {
    return (
        <div className='myInfo uk-flex uk-flex-column uk-margin-bottom'>
            <span className='infoLabel uk-text-muted uk-form-label'>Email</span> 
            <span className='infoIcon' uk-icon='icon: mail'>cynthia.dm1216@gmail.com</span>
            <span className='infoLabel uk-text-muted uk-form-label'>Phone</span>
            <span className='infoIcon' uk-icon='icon: receiver'>512-659-1186</span>
            <span className='infoLabel uk-text-muted uk-form-label'>Github</span>
            <span className='infoIcon' uk-con='icon: github'></span><a href='https://github.com/cynthia-dm1216' 
            target='_blank' rel="noopener noreferrer">github.com/cynthia-dm1216</a>
            <span className='infoLabel uk-text-muted uk-form-label'>LinkedIn</span>
            <span className='infoIcon' uk-icon='icon: linkedin'></span><a href='https://www.linkedin.com/in/cynthia-dominguez-2b6ba21a1/'
            target='_blank' rel="noopener noreferrer">linkedin.com/in/cynthia-dominguez-2b6ba21a1/</a>
            <hr className='uk-divider-small' />
        </div>
    )
}

export default MyInfo;