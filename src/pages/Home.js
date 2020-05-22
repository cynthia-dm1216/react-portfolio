import React from "react";
import About from '../components/About';
import './style.css';

function Home() {
    return (
        <div className='container'>
            <div className='uk-child-width-expand@m uk-text-center uk-grid-collapse' uk-grid='true'>
                <About />
                
                        <a href="https://www.linkedin.com/in/cynthia-dominguez-2b6ba21a1/" target="_blank" rel='noopener noreferrer'>LinkedIn</a>
                        <br />
                        <a href="https://github.com/cynthia-dm1216" target="_blank" rel='noopener noreferrer'>GitHub</a>
                        <br />
                        <a href="" target="_blank" rel='noopener noreferrer'>Resume</a>
                  </div>
                </div>
       
    
    );
}

export default Home;