import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 750px) {
        padding: 1rem;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 60rem;

    height: 100%;
    max-height: 50rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.04);

    @media (max-width: 800px) {
        gap: 2rem;
    }

    @media (max-width: 750px) {
        padding: 0 0 0 1rem;
    }

    @media (max-width: 685px) {
        grid-template-columns: 1fr;
    }
`

export const CompanyNameAndLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h1 {
        font-size: 2.5rem;
        font-weight: 600;

        @media (max-width: 445px) {
            font-size: 2rem;
        }
    }

    span {
        font-size: 13rem;
        animation: movingicon 1.5s infinite;

        color: rgba(255,0,0,0.6);

    @keyframes movingicon {

        from {
            transform: scale(1);
        }

        to {
            transform: scale(1.1);
        }

    }
}
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    padding: 0 1rem 0 0;

    label {
        font-size: 1.3rem;
    }
`

export const Input = styled.div`
    input {
        width: 100%;

        font-size: 1.2rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 2px solid rgba(255,0,0,0.2);
        background: #FAFAFA;

        &:hover {
            transition: .3s;
            border: 2px solid rgba(255,0,0,0.6);
        }
    }
`

export const PasswordInput = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const InputAndButton = styled.div`
    width: 100%;

    display: flex;

    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid rgba(255, 0, 0, 0.2);
    background: #FAFAFA;

    &:hover {
        transition: .3s;
        border: 2px solid rgba(255, 0, 0, 0.6);
    }

    input {
        width: 100%;

        font-size: 1.2rem;
        background: #FAFAFA;
    }

    button {
        width: 100%;
        max-width: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.5rem;

        color: rgba(255, 0, 0, 1);
        background: transparent;
    }
`


export const LoginButton = styled.div`
    width: 100%;

    button {
        width: 100%;

        position: relative;
        overflow: hidden;
        z-index: 0;

        font-size: 1.3rem;
        padding: 0.6rem 0;
        border-radius: 0.5rem;

        ::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0%;
            height: 100%;
            background: #90EE90;
            transition: .5s linear;
            z-index: -1;
        }

        &:hover {
            transition: .3s;

            ::before {
                width: 100%;
                left: 0;
            }
        }
    }
`

export const DontHaveAnAccount = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
        display: flex;
        justify-content: center;

        width: 100%;
        max-width: 6rem;

        border-bottom: 2px solid transparent;

        &:hover {
            transition: .3s;
            cursor: pointer;
            color: #0000FF;
            border-bottom: 2px solid rgba(0, 0, 0, 0.05);
        }
    }
`