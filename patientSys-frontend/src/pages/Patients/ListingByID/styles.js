import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin: 2rem 0;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction: column;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.1);
`

export const DeletePatientModal = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
`

export const DeletePatientModalInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 3rem;
    border-radius: 0.5rem;

    background: #D3D3D3;

    p {
        font-weight: 600;
        font-size: 1.1rem;
    }

    div {
        display: flex;
        justify-content: center;
        gap: 1rem;

        button {
            font-size: 1.1rem;
            padding: 0.5rem 2rem;
            border-radius: 0.5rem;

            color: #FFFFFF;

            &:hover {
                transition: .3s;
                cursor: pointer;
                filter: brightness(0.8);
            }

            :first-child {
                background: #3CB371;
            }

            :last-child {
                background: #CD5C5C;
            }
        }
    }
`

export const ReturnOrClickButtons = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 1rem 0;

    a {
        font-weight: 600;
        padding: 0.5rem 2rem;
        border-radius: 0.5rem;

        border: 1px solid transparent;

        &:hover {
            transition: .3s;
            color: #A9A9A9;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }
    }
`

export const EditOrDeleteButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    margin: 0 2rem 0 0;

    button {
        background: transparent;

        &:hover {
            transition: .3s;
            cursor: pointer;
            transform: scale(1.2);
        }
    }
`

export const PatientInfos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 1rem;

    width: 100%;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.2);
`

export const PatientInfosLabelAndValue = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;

        label {
            font-weight: 600;
            margin: 0 0 0.2rem 0;

            border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        }

        span {
            padding: 0.5rem 0 0.5rem 1rem;

            background: rgba(0, 0, 0, 0.1);
        }
    }
`