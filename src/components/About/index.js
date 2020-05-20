import React from 'react';
import '.style.css';

function About() {
    return (
        <div>
            <div className='uk-tile aboutSection' uk-height-viewport='expand: true'>
                <img src='../../assets/My_headshot.jpg' alt='My Picture' className='uk-border-circle myImg' uk-img='true' />
                <p className='uk-text-center aboutMe'>
                    Front-End Web Developer with a certificate in Full Stack Web Developer from the University of Texas.
                    With skills in HTML,CSS,JS,Node and Express.This coding bootcamp has helped me in collaborating 
                    with individuals with different backgrounds and has thought me how to calloborate and manage my time. Having the oppurtunity to take this bootcamp
                    has let me enjoy and learn how to create a website from scratch and see it come to life. I look forward to
                    see how much more I learn through my journey in coding and provide the best for the users.
                </p>
            </div>
        </div>
    );
}

export default About;