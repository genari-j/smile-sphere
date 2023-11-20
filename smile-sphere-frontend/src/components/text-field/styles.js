import styled from 'styled-components'
import { red7, red8, red9 } from '../../themes/colors'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  position: relative;

  border-radius: 0.3rem;
`

export const Input = styled.input`
  width: 100%;

  transition: .3s ease;

  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;

  border: 2px solid ${red7};

  &.with-error { border: 2px solid ${red9}; }
  &.with-icon { padding: 0.5rem 2.8rem 0.5rem 1rem; }
  &:hover { border: 2px solid ${red8}; }
  &:focus { border: 2px solid ${red9}; }
`

export const IconBtn = styled.button`
  display: flex;

  position: absolute;
  right: 0.5rem;

  font-size: 1.5rem;
  padding: 0 0.3rem;

  background: transparent;
`