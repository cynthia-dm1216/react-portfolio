import React from "react";
import './style.css';

function PortfolioCard({title,description,githubUrl,imageUrl,deployedUrl}) {
return (
    <div>
       <div className='portfolio-card uk-card uk-card-default'>
           <div className='uk-card-media-top'>
               <img src={imageUrl} alt={title} />
           </div>
           <div className='uk-card-body'>
           <h2 className='uk-card-title'>{title}</h2>
           <p>{description}</p>
           <a className='portfolioLink' href={githubUrl} target='_blank' rel='noopener noreferrer'>GitHub</a>
           {deployedUrl ? (<a className='portfolioLink' href={deployedUrl} target='_blank' rel='noopener noreferrer'>APP</a>): ""}
           </div>
       </div>
    </div>
);
}

export default PortfolioCard;