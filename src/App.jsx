import { useState } from 'react'
import { Home, Login, Purchases, Shop } from './pages'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {Loading, Navbar, ProtectedRoutes} from './components'
import { useSelector } from 'react-redux'
import User from './components/User'


function App() {
const isloading = useSelector(state => state.isloading)

  return (

    <HashRouter>
      <Navbar />
      <Container>
      
       {isloading && <Loading />}
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/shop/:id' element={<Shop />} />
         
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={<User />} />

          <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          
          </Route>

        </Routes>
      </Container>

    </HashRouter>



  )
}

export default App
