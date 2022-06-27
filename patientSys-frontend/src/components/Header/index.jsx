// Autenticação
import { useAuth } from '../../hooks/auth'

// IMGS
import DoctorImg from '../../assets/images/doctor.png'

// Icons
import { FaFileMedicalAlt } from 'react-icons/fa'

// CSS
import { Container, TitlesBackground, CompanyNameAndLogo, AvatarAndUser } from './styles'


export function Header() {
    const { user } = useAuth()

    return (
        <Container>

            <TitlesBackground>
                <CompanyNameAndLogo>
                    <h1>patientSys</h1>
                    <span><FaFileMedicalAlt /></span>
                </CompanyNameAndLogo>

                <AvatarAndUser>
                    <img src={DoctorImg} alt="Avatar" />
                    <span>#{user.name}</span>
                </AvatarAndUser>
            </TitlesBackground>

        </Container>
    )
}