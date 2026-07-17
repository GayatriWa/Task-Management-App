import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom"
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
  return (
        <Routes> 
            <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
  )
}

export default AppRoutes