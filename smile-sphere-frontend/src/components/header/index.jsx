import { useAuth } from '../../hooks/auth'

import { FaTooth, FaUser } from 'react-icons/fa'

import {
  Container,
  TitlesBackground,
  CompanyNameAndLogo,
  AvatarAndUser
} from './styles'

export function Header() {
  const { user } = useAuth()

  return (
    <Container>
      <TitlesBackground>
        <CompanyNameAndLogo>
          <h1>SmileSphere</h1>
          <span><FaTooth /></span>
        </CompanyNameAndLogo>

        <AvatarAndUser>
          <i><FaUser /></i>
          <span>{user?.name}</span>
        </AvatarAndUser>
      </TitlesBackground>
    </Container>
  )
}