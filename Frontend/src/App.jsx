/* eslint-disable no-unused-vars */ 
import React from 'react'

//importing required modules
import Home from './home/Home'
import Allocate from './components/Allocate'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'

import {Navigate, Route,Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Logout from './components/Logout'
import { useAuth } from './context/UseAuthProvider'
import Contact from './components/Contact'
import About from './components/About'

// shivambirla@gmail.com and 123
function App() {
    //useAuth is a custom hook created for authenticating a user/conditional rendering.
    //here we are calling useAuth fn/component.
    const [authUser,setAuthUser]= useAuth();

  return (
    //creating routes for different paths with rendering their components.
    //using react router>> routes>> route.
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path="/dashboard" element={authUser?<Dashboard />:<Navigate to="/login" />} />
        <Route path="/allocate"  element={authUser?<Allocate />:<Navigate to="/login" />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about-us' element={<About/>}/>
      </Routes>
      <Toaster/>
    </>
    
    //Link and NavLink can be used to nav b/w pages w/o refreshing the page.
    //Toaster is used to display notifications to user.
  )
}

export default App