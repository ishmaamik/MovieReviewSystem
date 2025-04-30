import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Body from './pages/Body'
import Footer from './components/Footer'
import MyProfile from './pages/MyProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        
      
        <ThemeProvider>
          <Navbar />
          <Routes>
          <Route path="/MyProfile" element={<MyProfile/>}/>
          <Route path="/" element={<Body/>}/>
        </Routes>
          <Footer/>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
