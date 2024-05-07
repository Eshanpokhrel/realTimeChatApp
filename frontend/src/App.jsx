import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import LoginAndSignup from './components/pages/LoginAndSignup'
import Home from "./components/pages/home"
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {

  const { authUser } = useAuthContext()

  return (
    <div className='w-full h-screen bg-[#154c79] flex-center'>
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to='/login'/>} />
        <Route path="/login" element={authUser ? <Navigate to='/'/> : <LoginAndSignup/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
