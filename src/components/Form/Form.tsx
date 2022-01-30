import React, {useState, useEffect} from 'react';
import { toast, ToastContainer } from 'react-toastify'
import { useForm, ValidationError } from '@formspree/react'
import validator from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';

import { Container, ContainerSucces } from './styled'

export const Form = () => {

    const [state, handleSubmit] = useForm('myyozglw')

    const [validEmail, setValidEmail] = useState(false)
    const [human, setHuman] = useState(false)
    const [message, setMessage] = useState('')


    function verifyEmail(email: string) {
        if(validator.isEmail(email)) {
            setValidEmail(true)
        }else {
            setValidEmail(false)
        }
    }

    useEffect(() => {
        if (state.succeeded) {
            toast.success('Письмо успешно отправлено!', {
                position: toast.POSITION.BOTTOM_LEFT,
                pauseOnFocusLoss: false,
                closeOnClick: true,
                hideProgressBar: false,
                toastId: 'succeeded',
            })
        }
    })
    if(state.succeeded) {
        return (
            <ContainerSucces>
                <h3>Obrigado to get in touch!</h3>
                <button
                    onClick={() =>{
                        window.scrollTo({top:0, behavior: 'smooth'})
                    }}
                >
                    Back to top
                </button>
                <ToastContainer />
            </ContainerSucces>
        )
    }

    return (
        <Container>
            <h2>Contact me from the form below</h2>
            <form onSubmit={handleSubmit} >
                <input 
                    required
                    placeholder='Email'
                    id="email"
                    type='"email'
                    name="email"
                    onChange={e => verifyEmail(e.target.value)}
                />
                <ValidationError field="email" prefix="Email" errors={state.errors} />
                <textarea 
                    required
                    placeholder='Leave your message'
                    id='message'
                    name='message'
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                />
                <ValidationError field="message" prefix="Message" errors={state.errors} />
                <ReCAPTCHA
                    sitekey='6LcAu-IdAAAAAJOTI5E_eRltZNQCvukIl2-f1glQ'
                    onChange={e => setHuman(true)}
                >
                </ReCAPTCHA>
                <button 
                    type='submit'
                    disabled={ state.submitting || !validEmail || !message || !human  }
                >
                    Send
                </button>
            </form>
        </Container>
    )
};