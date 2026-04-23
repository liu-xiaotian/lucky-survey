import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <div>MainLayout header</div>
      <Outlet />
      <div>MainLayout footers</div>
    </>
  )
}

export default MainLayout
