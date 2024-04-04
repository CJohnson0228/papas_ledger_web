import styled from '@emotion/styled'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import useLogin from '../hooks/useLogin'
import { useTheme } from '../styles/ThemeProvider'
import { ThemeType } from '../styles/ThemeTypes'
import TextInput from './general/TextInput'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
})

const Title = styled.div({
  textAlign: 'center',
})

const Inputs = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 20,
  marginBottom: 20,
  width: '100%',
})

type themeProps = {
  theme: ThemeType
}

const LoginButton = styled.button<themeProps>(
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

const Forgot = styled.button({})
const Remember = styled.div({})

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

const Login = () => {
  const theme = useTheme()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login, isLoading, error } = useLogin()

  const handleLoginUser = async () => {
    login(email, password)
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
      <Title>Login to Continue</Title>
      <ErrorBlock
        className='error'
        theme={theme}>
        {error}
      </ErrorBlock>
      <Inputs>
        <TextInput
          type='text'
          placeholder='email'
          onChange={setEmail}
        />
        <TextInput
          type='password'
          placeholder='password'
          onChange={setPassword}
        />
        <Remember>remember me</Remember>
        <Forgot>Forgot password</Forgot>
      </Inputs>
      <LoginButton
        theme={theme}
        onClick={handleLoginUser}>
        Login
      </LoginButton>
    </Container>
  )
}

export default Login
