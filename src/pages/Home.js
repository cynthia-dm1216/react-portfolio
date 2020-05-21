import React from 'react';
import About from '../components/About';
import './style.css';

function Home() {
    return (
        <div className='container'>
            <div className='uk-child-width-expand@m uk-text-center uk-grid-collapse' uk-grid='true'>  
            </div>
            <About />
        </div>
    );
}

export default Home;