import React from 'react';
import './style.css';

function MyInfo() {
    return(
   <div className="contactInfo uk-flex uk-flex-column uk-margin-bottom">
   <span className="contactLabel uk-text-muted uk-form-label">Email</span>
   <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
       uk-icon="icon: mail"></span>cynthia-dm1216@gmail.com</span>
   <span className="contactLabel uk-text-muted uk-form-label">Phone</span>
   <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
       uk-icon="icon: phone"></span>512-659-1234</span>
   <span className="contactLabel uk-text-muted uk-form-label">LinkedIn</span>
   <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
       uk-icon="icon: linkedin"></span><a href="https://www.linkedin.com/in/cynthia-dominguez-2b6ba21a1/"
           target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/cynthia-dominguez-2b6ba21a1/</a></span>
   <span className="contactLabel uk-text-muted uk-form-label">GitHub</span>
   <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
       uk-icon="icon: github"></span><a href="https://github.com/cynthia-dm1216"
           target="_blank" rel="noopener noreferrer">https://github.com/cynthia-dm1216</a></span>
   <hr className="uk-divider-small" />
</div>
);
}

export default MyInfo