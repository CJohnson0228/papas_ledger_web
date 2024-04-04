import { useNavigate } from 'react-router-dom'
import { authLogout } from '../redux/appSlice'
import { userLogout } from '../redux/userSlice'
import { useAppDispatch } from './useAppDispatch'

function useLogout() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem('user')

    // logout of redux
    dispatch(userLogout())
    dispatch(authLogout())

    navigate('/')
  }

  return logout
}

export default useLogout
