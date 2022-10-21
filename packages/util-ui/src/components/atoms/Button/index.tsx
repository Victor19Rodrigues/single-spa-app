import { Button as CustomButton } from '@mui/material'
import { Container } from './styles'

export function Button({ children }) {
  return (
    <Container>
      <CustomButton variant='contained'>{children}</CustomButton>
    </Container>
  )
}
