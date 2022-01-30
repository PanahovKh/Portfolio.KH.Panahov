import { useState } from 'react'
import { Container  } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import KH_logo from "../../assets/KH_Logo.svg"

import CV from '../../assets/CV_Khanali_Panahov.pdf'

export const Header = () => {

    const [isActive, setActive] = useState(false)

    function toggleTheme() {
        let html = document.getElementsByTagName('html')[0]
        html.classList.toggle('light')
    }

    const closeMenu = () => {
        setActive(false)
    }

    return (
        <Container className='header-fixed'>
            <Router>
                <HashLink smooth to="#home" className='logo'>
                    <div className='kh_logo'>
                        <span className='green'> <img src={KH_logo} alt='logo' /> </span>
                        <span>Panahov</span>
                    </div>
                </HashLink>

                <input 
                    onClick={toggleTheme}
                    className='container_toggle'
                    type='checkbox'
                    id='switch'
                    name='mode'
                />
                <label htmlFor='switch' >Toggle</label>

                <nav className={isActive ? 'active': ''}>
                    <NavHashLink smooth to="#home" onClick={closeMenu}>
                        Home
                    </NavHashLink>
                    <NavHashLink smooth to="#about" onClick={closeMenu}>
                        About me
                    </NavHashLink>
                    <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
                        Portfolio
                    </NavHashLink>
                    <NavHashLink smooth to="#contact" onClick={closeMenu}>
                        Contact
                    </NavHashLink>
                    <a href={CV} download className='button'>
                        CV
                    </a>
                </nav>
                
                <div 
                    aria-expanded={isActive ? 'true' : 'false'}
                    aria-haspopup='true'
                    aria-label={isActive ? 'предметы menu' : 'отмена menu'}
                    className={isActive ? 'menu active' : 'menu'}
                    onClick = {() => {
                        setActive(!isActive)
                    }}
                >
                </div>
            </Router>
        </Container>
    )
};


