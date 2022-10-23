import { FormEvent, useState, useEffect } from 'react'
import { Container, WrapperForm } from './styles'
import { Switch, Input, Button, Checkbox } from '../../atoms'
// @ts-ignore
import { auth$, login } from '@mfe/util-auth'
import { Alert, AlertTitle } from '@mui/material'

export function Form() {
  const [isActiveSwitchButton, setIsActiveSwitchButton] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let timeout
    const sub = auth$.subscribe(({ pending, error }) => {
      setPending(pending)
      setError(error)

      timeout = setTimeout(() => {
        setError('')
      }, 2000)
    })

    return () => {
      clearInterval(timeout)
      sub.unsubscribe()
    }
  }, [])

  const handleActiveSwitchButton = () => {
    setIsActiveSwitchButton((prevState) => !prevState)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    login(email, password)

    setEmail('')
    setPassword('')
  }

  return (
    <Container>
      <Switch
        isActiveSwitchButton={isActiveSwitchButton}
        onClick={handleActiveSwitchButton}
      />

      <WrapperForm onSubmit={handleSubmit}>
        {!isActiveSwitchButton && (
          <Input
            id='name'
            size='medium'
            label='Name'
            variant='standard'
            ariaDescribedby='nameError'
            error=''
          />
        )}
        <Input
          id='email'
          size='medium'
          label='Email'
          type='email'
          variant='standard'
          value={email}
          onInput={(event) => setEmail(event.target.value)}
          ariaDescribedby='emailError'
          error=''
        />
        <Input
          id='password'
          size='medium'
          type='password'
          label='Password'
          value={password}
          onInput={(event) => setPassword(event.target.value)}
          variant='standard'
          ariaDescribedby='passwordError'
          error=''
        />
        {!isActiveSwitchButton && (
          <Input
            id='repeatPassword'
            size='medium'
            type='password'
            label='Repeat your password'
            variant='standard'
            ariaDescribedby='repeatPasswordError'
            error=''
          />
        )}

        {isActiveSwitchButton && <Checkbox label='Remember me' />}

        {isActiveSwitchButton ? (
          <Button children='SIGN IN' loading={pending} />
        ) : (
          <Button children='REGISTER' loading={pending} />
        )}

        {error && (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            <strong>{error}</strong>
          </Alert>
        )}
      </WrapperForm>
    </Container>
  )
}
