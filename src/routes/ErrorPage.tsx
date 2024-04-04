import styled from '@emotion/styled'
import { useRouteError } from 'react-router-dom'
import { useTheme } from '../styles/ThemeProvider'

function ErrorPage() {
  const theme = useTheme()
  const error: unknown = useRouteError()
  console.error(error)

  const Page = styled.div({
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.colors.common.background,
    color: theme.colors.common.text,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  })

  const Heading = styled.h1({
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 16,
  })

  const Para = styled.p({
    fontSize: 40,
    margin: 8,
    color: theme.colors.grey.main,
  })

  const Information = styled.i({
    textTransform: 'uppercase',
    color: theme.colors.warning.main,
  })

  return (
    <Page id='error-page'>
      <Heading>Oops!</Heading>
      <Para>Sorry, an unexpected error has occurred.</Para>
      <Para>
        <Information>
          {(error as Error)?.message || (error as { statusText?: string })?.statusText}
        </Information>
      </Para>
    </Page>
  )
}

export default ErrorPage
