import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin: 2rem 0;
    padding: 1rem;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1000px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.1);
`

export const TitleAndButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: 1rem 0;

    div {
        display: flex;
        align-items: center;

        a {
            margin: 0 1rem 0 0;
            padding: 0.5rem;

            &:hover {
                transition: .3s;
                color: #A9A9A9;
            }
        }

        button {
            display: flex;
            align-items: center;

            height: 2.2rem;

            font-size: 1.1rem;
            padding: 0 3rem;
            border-radius: 0.5rem;

            &:hover {
                transition: .3s;
                cursor: pointer;
                background: #A9A9A9;
                color: #FFFFFF;
            }
        }
    }
`

export const PatientsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: 0.5rem 0 0.5rem 0;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-radius: 0.5rem 0.5rem 0 0;

    border-bottom: 2px solid #A9A9A9;

    &:hover {
        transition: .3s;
        cursor: pointer;
        border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
        background: rgba(0, 0, 0, 0.1);
        border-bottom: 2px solid transparent;
    }
`

export const PatientName = styled.div`
    width: 100%;
    max-width: 55%;

    span {
        font-size: 1.1rem;
        font-weight: 600;
    }
`

export const PatientDescriptions = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 45%;
`