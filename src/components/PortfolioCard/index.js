import React from 'react';
import './style.css';
import { findAllByTitle } from '@testing-library/react';

function PortfolioCard({title,description,imageUrl,githubUrl }) {
    return(
        <div>
            <div className='portfolioCard uk-card uk-card-default'>
                <div className='uk-card-media-top'>
                    <img src={imageUrl} alt={title} />
                </div>
                <div className='uk-card-body'>
                    <h2 className='uk-card-title'>{title}</h2>
                    <p>{description}</p>
                    <a className='portfolioLink' href={githubUrl} target='_blank' 
                    rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;