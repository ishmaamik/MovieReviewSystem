import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Body from './pages/Body'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />
          <Body/>
          <Footer/>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
