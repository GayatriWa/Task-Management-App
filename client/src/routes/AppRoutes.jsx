import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom"
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  return (
        <Routes> 
            <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute>
                                              <Dashboard />
                                            </ProtectedRoute>} />
        </Routes>
  )
}

export default AppRoutes