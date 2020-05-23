import React from 'react';
import './style.css';
import PortfolioCard from '../components/PortfolioCard';
import projects from '../../src/porjects.json';


function Portfolio() {
  

  return (
      <div className='container uk-card uk-card-default'>
          <h2 className='uk-text-center'>Portfolio</h2>
          <div className='uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1' uk-grid='true'
      >
      {
          projects.map(project => (
              <PortfolioCard
              id={project.id}
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              deployedUrl={project.deployedUrl}
              />
          ))
      }
      </div>
      </div>
  );
}

export default Portfolio;