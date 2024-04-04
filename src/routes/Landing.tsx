import styled from '@emotion/styled'
import { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import FacebookButton from '../components/general/FacebookButton'
import GoogleButton from '../components/general/GoogleButton'
import XButton from '../components/general/XButton'
import { useAppDispatch } from '../hooks/useAppDispatch'
import useFacebookLogin from '../hooks/useFacebookLogin'
import { useGoogleLogin } from '../hooks/useGoogleLogin'
import { toggleIsDark } from '../redux/appSlice'
import { useTheme } from '../styles/ThemeProvider'

const Landing = () => {
  const [login, setLogin] = useState<boolean>(false)
  const { facebookLogin, isFacebookLoading, facebookError } = useFacebookLogin()
  const { googleLogin, isGoogleLoading, googleError } = useGoogleLogin()
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const handleFacebookLogin = async () => facebookLogin()
  const handleGoogleLogin = async () => googleLogin()

  const Container = styled.div({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.common.background,
    color: theme.colors.common.text,
  })

  const AuthWindow = styled.div({
    borderRadius: 10,
    border: '1px solid',
    borderColor: theme.colors.common.text + '22',
    backgroundColor: theme.colors.common.paper,
    overflow: 'hidden',
  })

  // removed eventually just used to test themes
  const ThemeToggle = styled.button({
    position: 'absolute',
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.primary.text,
    padding: 10,
    bottom: 10,
    right: 10,
  })
  // removed eventually just used to test themes

  const Title = styled.div({
    padding: 20,
    backgroundColor: theme.colors.grey.light + '44',
  })
  const Heading = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18,
    span: {
      fontSize: 38,
      fontFamily: '"Holtwood One SC", sans-serif',
      color: theme.colors.success.main,
      textShadow: '1px 1px 1px #000',
    },
  })
  const SubHeading = styled.div({
    textAlign: 'center',
    fontSize: 12,
  })
  const Form = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: 370,
    width: 410,
  })

  const FormButtons = styled.div({
    display: 'flex',
  })

  const FormLoginButton = styled.div({
    flexGrow: 1,
    textAlign: 'center',
    padding: 10,
    fontWeight: login ? 700 : 500,
    backgroundColor: login ? theme.colors.grey.main + '44' : theme.colors.grey.main + '22',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: theme.colors.success.main,
      color: theme.colors.success.text,
    },
  })
  const FormRegisterButton = styled.div({
    flexGrow: 1,
    textAlign: 'center',
    padding: 10,
    fontWeight: !login ? 700 : 500,
    backgroundColor: !login ? theme.colors.grey.main + '44' : theme.colors.grey.main + '22',
    color: theme.colors.common.text,
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: theme.colors.success.main,
      color: theme.colors.success.text,
    },
  })

  const SocialRegister = styled.div({
    width: '100%',
    padding: '0 20px',
    marginBottom: 20,
  })

  return (
    <Container>
      <AuthWindow>
        <Title>
          <Heading>
            Welcome to <span>Papa's Ledger</span>
          </Heading>
          <SubHeading>An Expense Tracker App</SubHeading>
        </Title>
        <Form>{login ? <Login /> : <Register />}</Form>
        <SocialRegister>
          <FacebookButton onClick={handleFacebookLogin} />
          <GoogleButton onClick={handleGoogleLogin} />
          <XButton />
        </SocialRegister>
        <FormButtons>
          <FormLoginButton onClick={() => setLogin(true)}>Login</FormLoginButton>
          <FormRegisterButton onClick={() => setLogin(false)}>Register</FormRegisterButton>
        </FormButtons>
      </AuthWindow>

      <ThemeToggle onClick={() => dispatch(toggleIsDark())}>Theme toggle</ThemeToggle>
    </Container>
  )
}

export default Landing
