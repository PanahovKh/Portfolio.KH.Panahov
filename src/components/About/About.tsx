import React from 'react';
import { Container } from './styled';
import ScrollAnimation from 'react-animate-on-scroll';
import reactIcon from '../../assets/react-icon.svg'
import jsIcon from '../../assets/js-icon.svg';
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import photo from "../../assets/phto-min.jpg"

    export const About = () => {
        return (
            <Container id='about'>
                <div className='about-text'>
                    <ScrollAnimation animateIn="fadeLeft">
                        <h2>About me</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
                        <p>My name is Khanali, I'm a Product Owner and Project manager with great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. Improved my skills as a Front-End and Back-End developer </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInLeft' delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
                        <p>I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing layouts that provide me. I'm always improving myself with each project they put in my hands.</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInLeft' delay={0.6 * 1000}>
                        <p>I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInLeft' delay={0.7 * 1000}>
                        <h3> Here are my main skills :  </h3>
                    </ScrollAnimation>
                    <div className='hard-skills'>
                        <div className='hability'>
                            <ScrollAnimation animateIn='fadeInUp' delay={0.1 * 1000}>
                                <img src={reactIcon} alt='React'/>
                            </ScrollAnimation>
                        </div>
                        <div className='hability'>
                            <ScrollAnimation animateIn='fadeInUp' delay={0.2 * 1000}>
                                <img src={jsIcon} alt='JavaScript' />
                            </ScrollAnimation>
                        </div>
                        <div className='hability'>
                            <ScrollAnimation animateIn='fadeInUp' delay={0.3 * 1000}>
                                <img src={cssIcon} alt='CSS' />
                            </ScrollAnimation>
                        </div>
                        <div className='hability'>
                            <ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000}>
                                <img src={htmlIcon} alt='Html' />
                            </ScrollAnimation>
                        </div>
                        <div className='hability'>
                            <ScrollAnimation animateIn='fadeInUp' delay={0.5 * 1000}>
                                <img src={nodeIcon} alt='node' />
                            </ScrollAnimation>
                        </div>
                        <div className='hability'>
                            <ScrollAnimation animateIn='fadeInUp' delay={0.6 * 1000}>
                                <img src={typescriptIcon} alt='typeScript' />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className='about-image'>
                    <ScrollAnimation animateIn='fadeInRight' delay={0.5 * 1000}>
                        <img src={photo} alt='Manitor and me'/>
                    </ScrollAnimation>
                </div>
            </Container>
        )
    };


