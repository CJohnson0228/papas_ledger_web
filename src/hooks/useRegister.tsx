import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase/firebase.config'
import { authLogin } from '../redux/appSlice'
import { userLogin } from '../redux/userSlice'
import { useAppDispatch } from './useAppDispatch'

// update this entire function for firebase register logic
// also move the social media logins to here
function useRegister() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const signup = async (
    name: string,
    email: string,
    password: string,
    passwordConfirm: string,
    terms: boolean
  ) => {
    setIsLoading(true)
    setError(null)

    // need to add error login and validation here
    if (password !== passwordConfirm) {
      setError('Passwords must match')
    } else if (name === '') {
      setError('Name must be filled')
    } else if (email === '') {
      setError('Email must be filled')
    } else if (password === '') {
      setError('Password must be filled')
    } else if (!terms) {
      setIsLoading(false)
      setError('Terms and conditions must be Accepted')
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          const newUser = {
            name: name,
            token: user.refreshToken,
            _id: user.uid,
          }
          dispatch(userLogin(newUser))
          dispatch(authLogin())
          setDoc(doc(db, 'users', user.uid), newUser)
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

  return { signup, isLoading, error }
}

export default useRegister
