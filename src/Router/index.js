import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../Page/AppLayout'
import Home from '../Page/Home'
import Login from '../Page/Login'
import NewUser from '../Page/NewUser'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
