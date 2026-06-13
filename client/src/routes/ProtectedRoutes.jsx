import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes() {

    let isLoggedIn = useSelector((state)=>state.user.isLoggedin);
  return (
    isLoggedIn?<Outlet/>:<Navigate to={'/'}/>
  )
}

export default ProtectedRoutes