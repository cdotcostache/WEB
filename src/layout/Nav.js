import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to='/'>Dashboard</Link>
      <Link to='/authenticate'>Login</Link>
    </nav>
  )
}

export default Nav
