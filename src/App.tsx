import { RouterProvider } from 'react-router-dom'
import { useAppSelector } from './hooks/useAppSelector'
import { router } from './routes/router'
import { ThemeProvider } from './styles/ThemeProvider'
import { darkTheme } from './styles/darktheme'
import { lightTheme } from './styles/lightTheme'

const App = () => {
  const isDark = useAppSelector((state) => state.app.isDark)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
