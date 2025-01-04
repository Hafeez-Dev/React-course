import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {LogoutBtn} from '../index'

function Header() {
  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status)

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    },
  ]
  return (
    <header>
      <nav className='container flex justify-between items-center p-4 text-black'>
        <div>
          <Link to='/' className='text-2xl font-bold'>Dev-Blogs</Link>
        </div>
        <ul className='flex items-center space-x-4'>
          {
            navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
