import React, { useState, useEffect } from 'react'
import { login, logout } from './store/authSlice'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {Header, Footer} from './components' 
import { Outlet } from 'react-router-dom'

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
  }, [])

  return !loading ? (
    <div className='flex justify-center items-center h-screen'>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </div>
  ) : ("Loading...")
}

export default App