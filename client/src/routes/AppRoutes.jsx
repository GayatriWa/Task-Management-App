import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes