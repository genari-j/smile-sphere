// Hooks
import { useState } from 'react'

// Tag A - Navegação
import { Link, useNavigate } from 'react-router-dom'

// API
import api from '../../services/api'

// Icons
import { FaFileMedicalAlt } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

// Toast
import { toast } from 'react-toastify'

// CSS
import { Container, Content, CompanyNameAndLogo, LoginForm, PasswordInput, LoginButton, InputAndButton, Input, AlreadyHaveAnAccount } from './styles'


export function SignUp() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [code, setCode] = useState()
    const [passwordButtonType, setPasswordButtonType] = useState(false)

    const navigate = useNavigate()

    function toggleBtn() {
        setPasswordButtonType(prevState => !prevState)
    }

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
                    <h1>patientSys</h1>
                    <span><FaFileMedicalAlt /></span>
                </CompanyNameAndLogo>

                <LoginForm>
                    <Input>
                        <label>Name:</label>
                        <input type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
                    </Input>

                    <Input>
                        <label>ID:</label>
                        <input type="number" placeholder="Doctor ID" onChange={(e) => setCode(e.target.value)} />
                    </Input>

                    <PasswordInput>
                        <div>
                            <label>Password:</label>
                        </div>

                        <InputAndButton>
                            <input type={passwordButtonType ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <button type="button" onClick={toggleBtn}>{passwordButtonType ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button>
                        </InputAndButton>
                    </PasswordInput>

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