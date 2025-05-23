import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Body from './pages/Body'
import Footer from './components/Footer/Footer'
import MyProfile from './pages/MyProfile'
import MovieProfile from './pages/MovieProfile'
import { UserProvider } from './context/UserContext'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <UserProvider>
      
        <ThemeProvider>
          <Navbar />
          <Routes>
          <Route path="/MyProfile/:userName" element={<MyProfile/>}/>
          <Route path="/MovieProfile/:movieURL" element={<MovieProfile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Body/>}/>
        </Routes>
          <Footer/>
        </ThemeProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
