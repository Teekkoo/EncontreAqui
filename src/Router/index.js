import React from 'react'
import AppLayout from '../Page/AppLayout'
import Home from '../Page/Home'
import Login from '../Page/Login'
import NewUser from '../Page/NewUser'

const Routes = () => {
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

export default Routes
