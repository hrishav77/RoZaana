import { useAuthContext } from './useAuthContext'
import { useGoalcontext } from './useGoalcontext'
export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const {dispatch:goaldispatch}=useGoalcontext()
  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    goaldispatch({type:'SET_GOAL',payload:null})
  }

  return { logout }
}