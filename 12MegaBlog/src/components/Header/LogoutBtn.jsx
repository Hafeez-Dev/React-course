import React from 'react'
import { Button } from '../index'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default LogoutBtn
