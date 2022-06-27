// Auth
import { useAuth } from "../../hooks/auth"

// Hooks
import { useState } from 'react'

// Redirecionamento de rota
import { Link, useNavigate } from 'react-router-dom'

// Icons
import { FaFileMedicalAlt } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

// Toasts
import { toast } from "react-toastify"

// CSS
import {
    Container, Content, CompanyNameAndLogo,
    LoginForm, PasswordInput, LoginButton,
    InputAndButton, Input, DontHaveAnAccount
} from './styles'


export function SignIn() {
    const [code, setCode] = useState()
    const [password, setPassword] = useState()
    const [passwordButtonType, setPasswordButtonType] = useState(false)
    const { signIn } = useAuth()

    const navigate = useNavigate()

    function toggleBtn() {
        setPasswordButtonType(prevState => !prevState)
    }

    async function handleSubmitLogin() {
        await signIn(code, password)
        try {
            if (code && password) {
                await signIn(code, password)
                navigate('/patients')
            } else {
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
                    <h1>patientSys</h1>
                    <span><FaFileMedicalAlt /></span>
                </CompanyNameAndLogo>

                <LoginForm>
                    <Input>
                        <label>ID:</label>
                        <input
                            type="number"
                            name="code"
                            placeholder="Doctor ID"
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </Input>

                    <PasswordInput>
                        <div>
                            <label>Password:</label>
                        </div>

                        <InputAndButton>
                            <input
                                type={passwordButtonType ? "text" : "password"}
                                name="password" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type='button'
                                onClick={toggleBtn}>{passwordButtonType
                                    ? <AiOutlineEyeInvisible />
                                    : <AiOutlineEye />}
                            </button>
                        </InputAndButton>
                    </PasswordInput>

                    <LoginButton>
                        <button
                            type="button"
                            onClick={handleSubmitLogin}>
                            Entrar
                        </button>
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