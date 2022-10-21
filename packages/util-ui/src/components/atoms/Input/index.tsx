import { FormHelperText, TextField } from '@mui/material'
import { FormWrapper } from './styles'

export function Input({ ariaDescribedby, error, ...props }) {
  return (
    <FormWrapper>
      <TextField {...props} />
      {error && (
        <FormHelperText id={ariaDescribedby}>Invalid padding!</FormHelperText>
      )}
    </FormWrapper>
  )
}
