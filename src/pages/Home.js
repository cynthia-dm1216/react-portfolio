import React from "react";
import About from '../components/About';
import './style.css';

function Home() {
    return (
        <div className='container'>
            <div className='uk-child-width-expand@m uk-text-center uk-grid-collapse' uk-grid='true'>
                <About />
                        <a href="https://docs.google.com/document/d/1kRt1syrTPc4EsuekK8yoeT1-0yv_afnfkYeyxyhm6eg/edit?usp=sharing" target="_blank" rel='noopener noreferrer'>Resume</a>
                  </div>
                </div>
       
    
    );
}

export default Home;