import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import api from '../../../services/api'

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

export function Registration() {
  const navigate = useNavigate()

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

  async function saveNewPatient() {
    const newPatient = {
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

    await api.post('/patients', newPatient).then(response => {
      if (response.status === 201) {
        toast.success('Paciente cadastrado.')
        navigate('/patients')
      }
    }).catch(err => {
      console.log(err.request)
    })
  }

  return (
    <Container>

      <ReturnAndTitle>
        <Link to='/patients'><MdKeyboardArrowLeft /></Link>
        <h1>Área de Cadastro</h1>
      </ReturnAndTitle>

      <Content>
        <Personal>
          <div>
            <label>Nome:</label>
            <input type="text" placeholder="Nome paciente" onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" placeholder="Conta de email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label>Data Nascimento:</label>
            <input type="date" onChange={(e) => setBirth(e.target.value)} />
          </div>

          <div>
            <label>Gênero:</label>
            <input type="text" placeholder="Digite um gênero" onChange={(e) => setGenre(e.target.value)} />
          </div>

          <div>
            <label>Profissão:</label>
            <input type="text" placeholder="Profissão" onChange={(e) => setOcupation(e.target.value)} />
          </div>

          <div>
            <label>Estado Civil:</label>
            <input type="text" placeholder="Estado Civil" onChange={(e) => setCivil(e.target.value)} />
          </div>

          <div>
            <label>Endereço:</label>
            <input type="text" placeholder="Informe o endereço" onChange={(e) => setAddress(e.target.value)} />
          </div>

          <div>
            <label>Complemento:</label>
            <input type="text" placeholder="Informe um complemento (ex: Casa, Apto)" onChange={(e) => setComplement(e.target.value)} />
          </div>

          <div>
            <label>Cidade:</label>
            <input type="text" placeholder="Informe a cidade" onChange={(e) => setCity(e.target.value)} />
          </div>

          <div>
            <label>Estado:</label>
            <select onChange={(e) => setState(e.target.value)}>
              <option value="">Selecione um estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AM">Amazonas</option>
              <option value="AP">Amapá</option>

              <option value="BA">Bahia</option>

              <option value="CE">Ceará</option>

              <option value="DF">Distrito Federal</option>

              <option value="ES">Espírito Santo</option>

              <option value="GO">Goiás</option>

              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>

              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Permambuco</option>

              <option value="PI">Piauí</option>

              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>

              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>

              <option value="TO">Tocantins</option>
            </select>
          </div>

          <div>
            <label>CEP:</label>
            <input type="text" placeholder="Informe o CEP" onChange={(e) => setZipcode(e.target.value)} />
          </div>

          <div>
            <label>Telefone (Fixo):</label>
            <input type="text" placeholder="Informe um telefone fixo" onChange={(e) => setTelephone(e.target.value)} />
          </div>

          <div>
            <label>Celular:</label>
            <input type="text" placeholder="Informe um nº de celular" onChange={(e) => setCell(e.target.value)} />
          </div>
        </Personal>

        <Divider></Divider>

        <Treatment>
          <div>
            <label>Início tratamento:</label>
            <input type="date" placeholder="Data início tratamento" onChange={(e) => setTreatment(e.target.value)} />
          </div>

          <div>
            <label>Peso:</label>
            <input type="number" placeholder="Informe o peso" onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Altura:</label>
            <input type="text" placeholder="Informe a altura" onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div>
            <label>Comorbidades/doença crônica?</label>
            <textarea placeholder="Em caso positivo, descrever os tratamentos .." onChange={(e) => setComorbidity(e.target.value)}></textarea>
          </div>

          <div>
            <label>Antecedentes pessoais?</label>
            <textarea placeholder="Cirurgias prévias, medicamentos em uso, vicios, alergias .." onChange={(e) => setAntecedent(e.target.value)}></textarea>
          </div>
        </Treatment>
      </Content>

      <FormButtons>
        <button type="button" onClick={saveNewPatient}>Cadastrar</button>
        <Link to="/patients">Pacientes</Link>
      </FormButtons>

    </Container>
  )
}