import React from 'react';
import { Container  } from './styled';
import emailIcon from '../../assets/email-icon.svg'
import phoneIcon from '../../assets/phone-icon.svg'

export const Contacts = () => {
    return (
        <Container id="#contact">
            <header>
                <h2>Contact me</h2>
                <p> If you saw my potential or want to talk with me, you can send me a message. </p>
            </header>
            <div className='contacts'>
                <div>
                    <img src={emailIcon} alt="Email" />
                    <a href='mailto:kh.panahov@gmail.com'>kh.panahov@gmail.com</a>
                </div>
                <div>
                    <img src={phoneIcon} alt="PhoneNumber" />
                    <a href='tel:+994705845314' >(+994)70  5845314</a>
                </div>
            </div>
        </Container>
    )
};
