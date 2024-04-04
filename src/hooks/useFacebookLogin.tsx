import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase/firebase.config'
import { authLogin } from '../redux/appSlice'
import { userLogin } from '../redux/userSlice'
import { useAppDispatch } from './useAppDispatch'

function useFacebookLogin() {
  const [facebookError, setError] = useState<string | null>(null)
  const [isFacebookLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const facebookLogin = async () => {
    const provider = new FacebookAuthProvider()
    setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        const credential = FacebookAuthProvider.credentialFromResult(result)
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

  return { facebookLogin, isFacebookLoading, facebookError }
}

export default useFacebookLogin
