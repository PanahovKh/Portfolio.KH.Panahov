import Particles from 'react-tsparticles';
import { Container } from './styles'
import { Hero } from '../Hero/Hero'
import { About } from '../About/About'
import { Portfolio } from '../Portfolio/Portfolio'
import { Contacts } from '../Contacts/Contacts'

export const Main = () => {
    return (
        <Container>
            <Particles 
            
            />
            <Hero></Hero>
            <About></About>
            <Portfolio></Portfolio>
            <Contacts></Contacts>
        </Container>
    )
};




