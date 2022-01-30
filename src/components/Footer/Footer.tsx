import { Container } from './styled'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'

export const Footer = () => {
    return (
        <Container className='footer'>
            <a href='/' className='logo'>
                <span className='green'>KH </span>
                <span>Panahov</span>
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
