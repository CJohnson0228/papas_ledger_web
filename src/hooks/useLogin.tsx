import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase.config'
import { authLogin } from '../redux/appSlice'
import { userLogin } from '../redux/userSlice'
import { useAppDispatch } from './useAppDispatch'

function useLogin() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    if (email === '') {
      setError('Email must be filled')
    } else if (password === '') {
      setError('Password must be filled')
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          const newUser = {
            name: user.displayName,
            token: user.refreshToken,
            _id: user.uid,
          }
          dispatch(userLogin(newUser))
          dispatch(authLogin())
          setIsLoading(false)
          navigate('/dashboard')
        })
        .catch((error) => {
          const errorMessage = error.message.slice(22, error.message.length - 2)
          const newError = errorMessage.replace(/-/g, ' ')
          setError(newError)
          setIsLoading(false)
        })
    }
  }

  return { login, isLoading, error }
}

export default useLogin
