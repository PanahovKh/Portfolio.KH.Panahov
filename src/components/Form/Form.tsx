import React from 'react';

import { Container } from './styled'

export const Form = () => {



    return (
        <Container>
            <h2>Contact me from the form below</h2>
            <form >
                <input 
                    placeholder='Email'
                    id="email"
                    type='"email'
                    name="email"
                    onChange={e => console.log()}
                    required
                />
            </form>
        </Container>
    )
};


