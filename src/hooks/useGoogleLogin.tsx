import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase/firebase.config'
import { authLogin } from '../redux/appSlice'
import { userLogin } from '../redux/userSlice'
import { useAppDispatch } from './useAppDispatch'

export function useGoogleLogin() {
  const [googleError, setError] = useState<string | null>(null)
  const [isGoogleLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider()
    setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const accessToken = credential?.accessToken
        const newUser = {
          name: user.displayName,
          token: accessToken === undefined ? user.refreshToken : accessToken,
          _id: user.uid,
        }
        dispatch(userLogin(newUser))
        dispatch(authLogin())
        const docRef = doc(db, 'users', user.uid)
        getDoc(docRef).then((snapshot) => {
          if (!snapshot.exists()) {
            setDoc(doc(db, 'users', user.uid), newUser)
          }
          setIsLoading(false)
          navigate('/dashboard')
        })
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return { googleLogin, isGoogleLoading, googleError }
}
