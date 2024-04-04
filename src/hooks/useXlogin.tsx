import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authLogin } from '../redux/appSlice'
import { userLogin } from '../redux/userSlice'
import { useAppDispatch } from './useAppDispatch'

export function useXLogin() {
  const [xError, setError] = useState<string | null>(null)
  const [isXLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const xLogin = async () => {
    // add x login firebase logic here

    const response = 'test' // insert firebase login with email and password here

    const json = await response.json() // may have to change this based on firebase response

    dispatch(userLogin(json))
    dispatch(authLogin())
    navigate('/home')
  }

  return { xLogin, isXLoading, xError }
}
