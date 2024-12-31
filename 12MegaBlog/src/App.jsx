import React, { useState, useEffect } from 'react'
import { login, logout } from './store/authSlice'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }))
        } else {
          dispatch(logout())
        }
      }).finally(() => {
        setLoading(false)
      })
  }, [dispatch])

  return !loading ? (
    <div className='flex justify-center items-center h-screen'>
      <h1>Final Mega Blogs Poroject</h1>
    </div>
  ) : ("Loading...")
}

export default App