// Auth
import { useAuth } from '../../../hooks/auth'

// API
import api from '../../../services/api'

// Hooks
import { useEffect, useState } from "react";

// Redirecionando tela
import { Link, useNavigate } from 'react-router-dom';

// Componentes
import { Header } from '../../../components/Header'

// CSS
import {
    Container, Content, TitleAndButtons,
    PatientsContainer, PatientName, PatientDescriptions
} from "./styles";


export function Listing() {
    const [patients, setPatients] = useState()
    const { signOut } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        api.get('/patients').then(response => {
            if (response.status === 200) {
                setPatients(response.data)
            }
        })
    }, [])

    function handleShow(id) {
        navigate(`/patients/${id}`)
    }

    function logout() {
        signOut()
        navigate('/')
    }


    return (
        <Container>
            <Content>

                <Header />

                <TitleAndButtons>
                    <div>
                        <h2>Pacientes Cadastrados</h2>
                    </div>
                    <div>
                        <Link to="/registration">Novo Paciente</Link>
                        <button type="button" onClick={logout}>Sair</button>
                    </div>
                </TitleAndButtons>

                {patients && patients.map((patient) => {
                    return (
                        <PatientsContainer key={patient.id} onClick={() => handleShow(patient.id)}>
                            <PatientName>
                                <span>{patient.name}</span>
                            </PatientName>

                            <PatientDescriptions>
                                <span>{patient.birth}</span>
                                <span>{patient.city}</span>
                                <span>{patient.state}</span>
                            </PatientDescriptions>
                        </PatientsContainer>
                    )
                })}


            </Content>
        </Container>
    )
}