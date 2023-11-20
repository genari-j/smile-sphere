import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;

  margin: 1rem 0;
`

export const Divider = styled.div`
  width: 100%;
  height: 0.2rem;

  margin: 2rem 0;

  background-image: linear-gradient(to right, rgba(255,0,0,0.2), #4F4F4F, #A9A9A9, rgba(255,0,0,0.2), #A9A9A9, #4F4F4F, rgba(255,0,0,0.2));
`

export const ReturnAndTitle = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    font-size: 2.5rem;

    transition: .3s;
    transform: translateY(0);

    &:hover {
      transition: .5s;
      transform: translateY(-6px);
    }
  }

  @media (max-width: 580px) { justify-content: space-between; }
`

export const Personal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;

  input, select {
    width: 100%;

    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0.3rem 0 0 0;
    border-radius: 0.5rem;
    border: 2px solid rgba(255,0,0,0.2);

    &:hover {
      transition: .3s;
      border: 2px solid rgba(255,0,0,0.6);
    }
  }

  @media (max-width: 1040px) { grid-template-columns: 1fr 1fr; }

  @media (max-width: 580px) { grid-template-columns: 1fr; }
`

export const Treatment = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;

  input, textarea {
    width: 100%;

    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0.3rem 0 0 0;
    border-radius: 0.5rem;
    border: 2px solid rgba(255,0,0,0.2);

    &:hover {
      transition: .3s;
      border: 2px solid rgba(255,0,0,0.6);
    }
  }

  @media (max-width: 1040px) { grid-template-columns: 1fr 1fr; }

  @media (max-width: 580px) { grid-template-columns: 1fr; }
`

export const FormButtons = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  button {
    width: 100%;
    max-width: 10rem;

    position: relative;
    overflow: hidden;
    text-align: center;
    z-index: 0;

    font-size: 1.3rem;
    padding: 0.3rem 0;
    border-radius: 0.5rem;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0%;
      height: 100%;
      background: #90EE90;
      transition: .4s linear;
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

  a {
    width: 100%;
    max-width: 10rem;

    position: relative;
    overflow: hidden;
    text-align: center;
    z-index: 0;

    font-size: 1.3rem;
    padding: 0.3rem 0;
    border-radius: 0.5rem;
    border: 2px solid #B0E0E6;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0%;
      height: 100%;
      background: #B0E0E6;
      transition: .4s linear;
      z-index: -1;
    }

    &:hover {
      filter: brightness(0.8);
      border: 2px solid transparent;
      transition: .3s;

      ::before {
        width: 100%;
        left: 0;
      }
    }
  }
`