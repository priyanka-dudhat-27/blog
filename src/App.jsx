// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import MyPost from './pages/MyPost'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

const Home = () => {
  return (
    <div>home
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/my-post' element={<MyPost/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default Home