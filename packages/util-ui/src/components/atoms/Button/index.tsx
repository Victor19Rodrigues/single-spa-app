import { Button as CustomButton, CircularProgress } from '@mui/material'
import { Container } from './styles'

export function Button({ children, loading = false }) {
  return (
    <Container>
      <CustomButton variant='contained' type='submit'>
        {loading ? <CircularProgress size={14} /> : children}
      </CustomButton>
    </Container>
  )
}
