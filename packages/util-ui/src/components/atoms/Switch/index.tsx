import { Container, SwitchButton } from './styles'
import { SwitchProps } from './types'

export function Switch({ isActiveSwitchButton, ...props }: SwitchProps) {
  return (
    <Container>
      <SwitchButton isActiveSwitchButton={isActiveSwitchButton} {...props}>
        Sign in
      </SwitchButton>
      <SwitchButton isActiveSwitchButton={!isActiveSwitchButton} {...props}>
        Register
      </SwitchButton>
    </Container>
  )
}
