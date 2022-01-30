import styled from "styled-components";

export const Container = styled.footer`
    margin-top: 15rem;
    background-color: #2b2b2b;
    padding: 3rem 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{
        font-size: 2.8rem;
        .green{
            color: var(--green)
        }
    }

    .kh_logo {
        display: flex;
        gap: 0.5rem;
        img{
            width: 4.5rem;
        }
    }

    p{
        latter-spacing: 0.2rem;
        display: flex;
        align-items: center;
        gap: 0.5;

    }

    .social-media{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        img, span {
            font-size: 3rem;
            width: 3rem;
        }
    }

    @media(max-width: 800px) {
        padding: 4rem;
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }

    @media(max-width: 600px) {
        padding: 4rem 1rem;
        p{
            font-size: 1.2rem;
        }
    }
`