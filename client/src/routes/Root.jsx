import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Root() {
  return (
    <>
    <SideBar/>
    <Outlet/>
    </>
  )
}

export default Root