import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondery' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secondery: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${({ variant }) =>
    css`
      background: ${buttonVariant[variant]};
    `}
`
