import React from "react";

function PortfolioCard(props) {
return (
    <div>
       <div className='portfolio-card uk-card uk-card-default'>
           <div className='uk-card-media-top'>
               <img src={props.imageUrl} alt={props.title} />
           </div>
           <div className='uk-card-body'>
           <h2 className='uk-card-title'>{props.title}</h2>
           <p></p>
           </div>
       </div>
    </div>
);
}

export default PortfolioCard;