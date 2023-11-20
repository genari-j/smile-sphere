import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import api from '../../services/api'

import { TextField } from '../../components'
import { FaTooth } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { toast } from 'react-toastify'

import {
  Container,
  Content,
  CompanyNameAndLogo,
  LoginForm,
  ShowPasswordBtn,
  LoginButton,
  AlreadyHaveAnAccount
} from './styles'


export function SignUp() {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [code, setCode] = useState()
  const [passwordButtonType, setPasswordButtonType] = useState(false)

  const navigate = useNavigate()

  function toggleBtn() { setPasswordButtonType(prevState => !prevState) }

  const newuser = {
    name: name,
    password: password,
    code: code
  }

  async function handleNewUser() {
    await api.post('users', newuser).then(response => {
      if (response.status === 201) {
        toast.success('Usuário cadastrado!')
        navigate('/')
      }
    }).catch(err => {
      console.log(err.request)
    })
  }

  return (
    <Container>
      <Content>

        <CompanyNameAndLogo>
          <h1>SmileSphere</h1>
          <span><FaTooth /></span>
        </CompanyNameAndLogo>

        <LoginForm>
        <div>
            <label>ID:</label>
            <TextField
              type='text'
              name='name'
              placeholder='Nome'
              value={name}
              setValue={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>ID:</label>
            <TextField
              type='text'
              name='code'
              placeholder='User ID'
              value={code}
              setValue={(e) => setCode(e.target.value)}
            />
          </div>

          <div>
            <label>Password:</label>
            <TextField
              type={passwordButtonType ? "text" : "password"}
              name='password'
              placeholder='Senha'
              value={password}
              setValue={(e) => setPassword(e.target.value)}
              children={<ShowPasswordBtn type='button' onClick={toggleBtn}>{passwordButtonType ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }</ShowPasswordBtn>}
            />
          </div>

          <LoginButton>
            <button type="button" onClick={handleNewUser}>Cadastrar</button>
          </LoginButton>

          <AlreadyHaveAnAccount>
            <p>Já se cadastrou?</p>
            <Link to="/">Entre</Link>
          </AlreadyHaveAnAccount>
        </LoginForm>

      </Content>
    </Container>
  )
}