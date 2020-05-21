// import React, { useEffect, useState } from 'react';
// import './style.css';
// import API from '../utils/API';
// import PortfolioCard from '../components/PortfolioCard';

// function Portfolio() {
//   const [projects, setState] = useState([]);

//   useEffect(() => {
//       API.getprojects()
//       .then(res => setState(res))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//       <div className='container'>
//           <h2 className='uk-text-center'>Portfolio</h2>
//       >
//       {
//           projects.map(project => (
//               <PortfolioCard 
//               key={project.title}
//               title={project.title}
//               description={project.description}
//               imageUrl={project.imageUrl}
//               githubUrl={project.githubUrl}
//               />
//           ))
//       }
//       </div>
//   );
// }

// export default Portfolio;