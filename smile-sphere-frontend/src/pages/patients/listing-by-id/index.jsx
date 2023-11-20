import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import api from "../../../services/api"

import { Header } from '../../../components'

import { AiTwotoneEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

import { toast } from "react-toastify"

import {
  Container,
  Content,
  PatientInfosLabelAndValue,
  PatientInfos,
  EditOrDeleteButtons,
  ReturnOrClickButtons,
  DeletePatientModal,
  DeletePatientModalInfos
} from "./styles"

export function ListingByID() {
  const routeParams = useParams()
  const [patient, setPatient] = useState()
  const [deletePatientModal, setDeletePatientModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    api.get(`patients/${routeParams.id}`).then(response => {
      if (response.status === 200) {
        setPatient(response.data)
      }
    })
  }, [routeParams.id])

  function handleEdit(id) { navigate(`/patients/editing/${id}`) }
  function OpenDeletePatientModal() { setDeletePatientModal(true) }
  function CloseDeletePatientModal() { setDeletePatientModal(false) }

  async function handleDelete(id) {
    await api.delete(`/patients/${id}`).then(response => {
      if (response.status === 204) {
        toast.success("Paciente deletado.")
        navigate('/patients')
      }
    }).catch(err => {
      console.log(err.request)
    })
  }

  return (
    <Container>
      <Content>

        <Header />

        {deletePatientModal && (
          <DeletePatientModal>
            <DeletePatientModalInfos>
              <p>Tem certeza que deseja deletar esse paciente?</p>

              <div>
                <button type="button" onClick={() => handleDelete(patient.id)}>Sim</button>
                <button type="button" onClick={CloseDeletePatientModal}>Não</button>
              </div>
            </DeletePatientModalInfos>
          </DeletePatientModal>
        )}

        <ReturnOrClickButtons>
          <div>
            <Link to="/patients">Voltar</Link>
          </div>

          <EditOrDeleteButtons>
            <button type="button" title="Editar" onClick={() => handleEdit(patient.id)} ><AiTwotoneEdit size={22} color="#3CB371" /></button>
            <button type="button" title="Deletar" onClick={OpenDeletePatientModal}><FaTrash size={16} color="#DC143C" /></button>
          </EditOrDeleteButtons>
        </ReturnOrClickButtons>

        <PatientInfos>
          <div>
            <PatientInfosLabelAndValue>
              <div>
                <label>Nome</label>
                <span>{patient?.name}</span>
              </div>

              <div>
                <label>Email</label>
                <span>{patient?.email}</span>
              </div>

              <div>
                <label>Data Nascimento</label>
                <span>{patient?.birth}</span>
              </div>
            </PatientInfosLabelAndValue>

            <PatientInfosLabelAndValue>
              <div>
                <label>Gênero</label>
                <span>{patient?.genre}</span>
              </div>

              <div>
                <label>Profissão</label>
                <span>{patient?.ocupation}</span>
              </div>

              <div>
                <label>Estado Civil</label>
                <span>{patient?.civil}</span>
              </div>
            </PatientInfosLabelAndValue>

            <PatientInfosLabelAndValue>
              <div>
                <label>Endereço</label>
                <span>{patient?.address}</span>
              </div>

              <div>
                <label>Complemento</label>
                <span>{patient?.complement}</span>
              </div>

              <div>
                <label>Cidade</label>
                <span>{patient?.city}</span>
              </div>
            </PatientInfosLabelAndValue>
          </div>

          <div>
            <PatientInfosLabelAndValue>
              <div>
                <label>Estado</label>
                <span>{patient?.state}</span>
              </div>

              <div>
                <label>CEP</label>
                <span>{patient?.zipcode}</span>
              </div>

              <div>
                <label>Telefone</label>
                <span>{patient?.telephone}</span>
              </div>
            </PatientInfosLabelAndValue>

            <PatientInfosLabelAndValue>
              <div>
                <label>Celular</label>
                <span>{patient?.cell}</span>
              </div>

              <div>
                <label>Início Tratamento</label>
                <span>{patient?.treatment}</span>
              </div>

              <div>
                <label>Peso</label>
                <span>{patient?.weight}</span>
              </div>
            </PatientInfosLabelAndValue>

            <PatientInfosLabelAndValue>
              <div>
                <label>Altura</label>
                <span>{patient?.height}</span>
              </div>

              <div>
                <label>Comorbidades/doenças crônicas?</label>
                <span>{patient?.comorbidity}</span>
              </div>

              <div>
                <label>Atencedentes pessoais?</label>
                <span>{patient?.antecedent}</span>
              </div>
            </PatientInfosLabelAndValue>
          </div>
        </PatientInfos>

      </Content>
    </Container>
  )
}