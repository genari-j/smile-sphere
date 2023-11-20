import api from '../../../services/api'

import { useEffect, useState } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'

import { MdKeyboardArrowLeft } from "react-icons/md"

import { toast } from 'react-toastify'

import {
  Container,
  Content,
  ReturnAndTitle,
  Personal,
  Treatment,
  FormButtons,
  Divider
} from './styles.js'

export function Editing() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [birth, setBirth] = useState()
  const [genre, setGenre] = useState()
  const [ocupation, setOcupation] = useState()
  const [civil, setCivil] = useState()
  const [address, setAddress] = useState()
  const [complement, setComplement] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zipcode, setZipcode] = useState()
  const [telephone, setTelephone] = useState()
  const [cell, setCell] = useState()
  const [treatment, setTreatment] = useState()
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [comorbidity, setComorbidity] = useState()
  const [antecedent, setAntecedent] = useState()

  const [patient, setPatient] = useState()
  const routeParams = useParams()
  const navigate = useNavigate()

  // Pegando/selecionando o paciente pelo ID
  useEffect(() => {
    api.get(`patients/${routeParams.id}`).then(response => {
      if (response.status === 200) {
        setPatient(response.data)
      }
    }).catch(err => {
      console.log(err.request)
    })
  }, [routeParams.id])

  async function NewData() {
    const patientChanges = {
      name: name,
      email: email,
      birth: birth,
      genre: genre,
      ocupation: ocupation,
      civil: civil,
      address: address,
      complement: complement,
      city: city,
      state: state,
      zipcode: zipcode,
      telephone: telephone,
      cell: cell,
      treatment: treatment,
      weight: weight,
      height: height,
      comorbidity: comorbidity,
      antecedent: antecedent
    }

    await api.put(`patients/${routeParams.id}`, patientChanges).then(response => {
      if (response.status === 200) {
        toast.success("Dados alterados.")
        navigate('/patients')
      }
    }).catch(err => {
      console.log(err.request)
    })
  }


  return (
    <Container>

      <ReturnAndTitle>
        <Link to="/patients"><MdKeyboardArrowLeft /></Link>
        <h1>Área de Cadastro</h1>
      </ReturnAndTitle>

      <Content>
        <Personal>
          <div>
            <label>Nome:</label>
            <input type="text" name="name" defaultValue={patient && patient.name} placeholder="Nome paciente" onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" name="email" defaultValue={patient && patient.email} placeholder="Conta de email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label>Data Nascimento:</label>
            <input type="date" name="birth" defaultValue={patient && patient.birth} onChange={(e) => setBirth(e.target.value)} />
          </div>

          <div>
            <label>Gênero:</label>
            <input type="text" name="genre" defaultValue={patient && patient.genre} placeholder="Digite um gênero" onChange={(e) => setGenre(e.target.value)} />
          </div>

          <div>
            <label>Profissão:</label>
            <input type="text" name="ocupation" defaultValue={patient && patient.ocupation} placeholder="Profissão" onChange={(e) => setOcupation(e.target.value)} />
          </div>

          <div>
            <label>Estado Civil:</label>
            <input type="text" name="civil" defaultValue={patient && patient.civil} placeholder="Estado Civil" onChange={(e) => setCivil(e.target.value)} />
          </div>

          <div>
            <label>Endereço:</label>
            <input type="text" name="address" defaultValue={patient && patient.address} placeholder="Informe o endereço" onChange={(e) => setAddress(e.target.value)} />
          </div>

          <div>
            <label>Complemento:</label>
            <input type="text" name="complement" defaultValue={patient && patient.complement} placeholder="Informe um complemento (ex: Casa, Apto)" onChange={(e) => setComplement(e.target.value)} />
          </div>

          <div>
            <label>Cidade:</label>
            <input type="text" name="city" defaultValue={patient && patient.city} placeholder="Informe a cidade" onChange={(e) => setCity(e.target.value)} />
          </div>

          <div>
            <label>Estado:</label>
            <select name="state" defaultValue={patient && patient.state} onChange={(e) => setState(e.target.value)}>
              <option value="">Selecione um estado</option>
              <option value="AC" selected={patient?.state === "AC" ? true : false}>Acre</option>
              <option value="AL" selected={patient?.state === "AL" ? true : false}>Alagoas</option>
              <option value="AM" selected={patient?.state === "AM" ? true : false}>Amazonas</option>
              <option value="AP" selected={patient?.state === "AP" ? true : false}>Amapá</option>
              <option value="BA" selected={patient?.state === "BA" ? true : false}>Bahia</option>
              <option value="CE" selected={patient?.state === "CE" ? true : false}>Ceará</option>
              <option value="DF" selected={patient?.state === "DF" ? true : false}>Distrito Federal</option>
              <option value="ES" selected={patient?.state === "ES" ? true : false}>Espírito Santo</option>
              <option value="GO" selected={patient?.state === "GO" ? true : false}>Goiás</option>
              <option value="MA" selected={patient?.state === "MA" ? true : false}>Maranhão</option>
              <option value="MT" selected={patient?.state === "MT" ? true : false}>Mato Grosso</option>
              <option value="MS" selected={patient?.state === "MS" ? true : false}>Mato Grosso do Sul</option>
              <option value="MG" selected={patient?.state === "MG" ? true : false}>Minas Gerais</option>
              <option value="PA" selected={patient?.state === "PA" ? true : false}>Pará</option>
              <option value="PB" selected={patient?.state === "PB" ? true : false}>Paraíba</option>
              <option value="PR" selected={patient?.state === "PR" ? true : false}>Paraná</option>
              <option value="PE" selected={patient?.state === "PE" ? true : false}>Permambuco</option>
              <option value="PI" selected={patient?.state === "PI" ? true : false}>Piauí</option>
              <option value="RJ" selected={patient?.state === "RJ" ? true : false}>Rio de Janeiro</option>
              <option value="RN" selected={patient?.state === "RN" ? true : false}>Rio Grande do Norte</option>
              <option value="RS" selected={patient?.state === "RS" ? true : false}>Rio Grande do Sul</option>
              <option value="RO" selected={patient?.state === "RO" ? true : false}>Rondônia</option>
              <option value="RR" selected={patient?.state === "RR" ? true : false}>Roraima</option>
              <option value="SC" selected={patient?.state === "SC" ? true : false}>Santa Catarina</option>
              <option value="SP" selected={patient?.state === "SP" ? true : false}>São Paulo</option>
              <option value="SE" selected={patient?.state === "SE" ? true : false}>Sergipe</option>
              <option value="TO" selected={patient?.state === "TO" ? true : false}>Tocantins</option>
            </select>
          </div>

          <div>
            <label>CEP:</label>
            <input type="text" name="zipcode" defaultValue={patient && patient.zipcode} placeholder="Informe o CEP" onChange={(e) => setZipcode(e.target.value)} />
          </div>

          <div>
            <label>Telefone (Fixo):</label>
            <input type="text" name="telephone" defaultValue={patient && patient.telephone} placeholder="Informe um telefone fixo" onChange={(e) => setTelephone(e.target.value)} />
          </div>

          <div>
            <label>Celular:</label>
            <input type="text" name="cell" defaultValue={patient && patient.cell} placeholder="Informe um nº de celular" onChange={(e) => setCell(e.target.value)} />
          </div>
        </Personal>

        <Divider></Divider>

        <Treatment>
          <div>
            <label>Início tratamento:</label>
            <input type="date" name="treatment" defaultValue={patient && patient.treatment} placeholder="Data início tratamento" onChange={(e) => setTreatment(e.target.value)} />
          </div>

          <div>
            <label>Peso:</label>
            <input type="number" name="weight" defaultValue={patient && patient.weight} placeholder="Informe o peso" onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Altura:</label>
            <input type="text" name="height" defaultValue={patient && patient.height} placeholder="Informe a altura" onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div>
            <label>Comorbidades/doença crônica?</label>
            <textarea name="comorbidity" defaultValue={patient && patient.comorbidity} placeholder="Em caso positivo, descrever os tratamentos .." onChange={(e) => setComorbidity(e.target.value)}></textarea>
          </div>

          <div>
            <label>Antecedentes pessoais?</label>
            <textarea name="antecedent" defaultValue={patient && patient.antecedent} placeholder="Cirurgias prévias, medicamentos em uso, vicios, alergias .." onChange={(e) => setAntecedent(e.target.value)}></textarea>
          </div>
        </Treatment>
      </Content>

      <FormButtons>
        <button type="button" onClick={NewData}>Salvar</button>
        <Link to="/patients">Pacientes</Link>
      </FormButtons>

    </Container>
  )
}