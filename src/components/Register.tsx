import styled from '@emotion/styled'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import useRegister from '../hooks/useRegister'
import { useTheme } from '../styles/ThemeProvider'
import { ThemeType } from '../styles/ThemeTypes'
import TextInput from './general/TextInput'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

const Title = styled.div({
  textAlign: 'center',
})

const Inputs = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 5,
  marginBottom: 20,
  width: '100%',
})

type themeProps = {
  theme: ThemeType
}

const RegisterButton = styled.button<themeProps>(
  {
    textAlign: 'center',
    padding: '10px 20px',
    transition: 'all 0.2s ease',
    borderRadius: 5,
  },
  (props) => ({
    backgroundColor: props.theme.colors.grey.light + '33',
    '&:hover': {
      backgroundColor: props.theme.colors.success.main,
      color: props.theme.colors.success.text,
    },
  })
)

const ErrorBlock = styled.div<themeProps>(
  {
    minHeight: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    width: '100%',
    opacity: 0,
    marginTop: 5,
  },
  (props) => ({
    backgroundColor: props.theme.colors.warning.main,
    color: props.theme.colors.warning.text,
  })
)

const Register = () => {
  const theme = useTheme()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [terms, setTerms] = useState<boolean>(true) // change to false when login and button added
  const { signup, isLoading, error } = useRegister()

  const handleRegisterUser = async () => {
    signup(name, email, password, passwordConfirm, terms)
  }

  useEffect(() => {
    if (error !== null) {
      gsap.to('.error', {
        opacity: 1,
        duration: 0.2,
      })
    }
    if (error === null) {
      gsap.to('.error', {
        opacity: 0,
        duration: 0.2,
      })
    }
  }, [error])

  return (
    <Container>
      <Title>Register to Continue</Title>
      <ErrorBlock
        className='error'
        theme={theme}>
        {error}
      </ErrorBlock>
      <Inputs>
        <TextInput
          type='text'
          placeholder='name'
          onChange={setName}
        />
        <TextInput
          type='email'
          placeholder='email'
          onChange={setEmail}
        />
        <TextInput
          type='password'
          placeholder='password'
          onChange={setPassword}
        />
        <TextInput
          type='password'
          placeholder='confirm password'
          onChange={setPasswordConfirm}
        />
      </Inputs>
      <RegisterButton
        theme={theme}
        onClick={handleRegisterUser}>
        Register
      </RegisterButton>
    </Container>
  )
}

export default Register
