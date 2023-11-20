import { Container, Input, IconBtn } from './styles'

export const TextField = ({ type, placeholder, value, setValue, children }) => {
  return (
    <Container>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        className={children ? 'with-icon' : ''}
        onChange={setValue}
      />
      {children ? <IconBtn>{children}</IconBtn> : null}
    </Container>
  )
}
