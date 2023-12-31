import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div style={{ backgroundColor: 'var(--main-color)'}}>
          <Header />
          <Outlet/>
      </div>
      
  )
}

export default Layout;