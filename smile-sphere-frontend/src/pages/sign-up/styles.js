import styled from 'styled-components'
import { black8, red8, blue9 } from '../../themes/colors'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) { padding: 1rem; }
`

export const Content = styled.div`
  width: 100%;
  max-width: 60rem;

  height: 100%;
  max-height: 50rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0 ${red8};

  @media (max-width: 800px) { gap: 2rem; }
  @media (max-width: 750px) { padding: 0 0 0 1rem; }
  @media (max-width: 685px) { grid-template-columns: 1fr; }
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

    @media (max-width: 445px) { font-size: 2rem; }
  }

  span {
    font-size: 13rem;
    animation: movingicon 1.5s infinite;

    color: ${red8};

    @keyframes movingicon {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }
  }
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  padding: 0 1rem 0 0;

  label { font-size: 1.3rem; }
`

export const ShowPasswordBtn = styled.button`
  display: flex;
  
  font-size: 1.5rem;

  background: none;
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
      background: ${red8};
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

export const AlreadyHaveAnAccount = styled.div`
  display: flex;
  gap: 0.2rem;

  a {
    display: flex;
    justify-content: center;

    width: 100%;
    max-width: 3rem;

    border-bottom: 2px solid transparent;

    &:hover  {
      transition: .3s;
      cursor: pointer;

      color: ${blue9};
      border-bottom: 2px solid ${black8};
    }
  }
`