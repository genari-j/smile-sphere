import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"

import { TextField } from '../../components'
import { FaTooth } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { toast } from "react-toastify"

import {
  Container,
  Content,
  CompanyNameAndLogo,
  LoginForm,
  ShowPasswordBtn,
  LoginButton,
  DontHaveAnAccount
} from './styles'


export function SignIn() {
  const navigate = useNavigate()

  const [code, setCode] = useState()
  const [password, setPassword] = useState()
  const { signIn } = useAuth()

  const [passwordButtonType, setPasswordButtonType] = useState(false)
  function toggleBtn() { setPasswordButtonType(prevState => !prevState) }

  async function handleSubmitLogin() {
    await signIn(code, password)

    try {
      if (code && password) {
        await signIn(code, password)
        navigate('/patients')
      } else {
        toast.error('Usuário ou senha inválidos!')
        throw new Error()
      }
    } catch (error) {
      toast.error('Usuário ou senha inválidos!')
    }
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
            <button type="button" onClick={handleSubmitLogin}>Entrar</button>
          </LoginButton>

          <DontHaveAnAccount>
            <p>Ainda não tem uma conta?</p>
            <Link to="/signup">Registre-se</Link>
          </DontHaveAnAccount>
        </LoginForm>

      </Content>
    </Container>
  )
}