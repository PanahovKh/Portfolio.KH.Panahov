import { Container } from './styled'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'
import KH_logo from "../../assets/KH_Logo.svg"

export const Footer = () => {
    return (
        <Container className='footer'>
            <a href='/' className='logo'>
                <div className='kh_logo'>
                    <span className='green'> <img src={KH_logo} alt='logo' /> </span>
                    <span>Panahov</span>
                </div>
            </a>
            <div>
                <p>
                    This site was created with  <span>❤️</span>
                </p>
            </div>

            <div className='social-media'>
                <a 
                    href="https://www.linkedin.com/in/khanali-panahov-126b3417a/"
                    target="_blank"
                    rel="noreferrer">
                <img src={linkedinIcon} alt='LinkedIn' />
                </a>

                <a 
                    href="https://github.com/PanahovKh"
                    target="_blank"
                    rel="noreferrer" >
                    <img src={githubIcon} alt='GitHub' />
                </a>
                <a 
                    href="https://www.instagram.com/panahov_x/"
                    target="_blank"
                    rel="noreferrer" >
                    <img src={instagramIcon} alt='Instagram' />
                </a>
                <a 
                    href="https://discord.com/"
                    target="-blank"
                    rel="noreferrer" >
                    <img src={discordIcon} alt='Discord' />
                </a>
            </div>
        </Container>
    )
};
