import './App.css'
import LoginAndSignup from './components/pages/LoginAndSignup'
import Home from "./components/pages/home"

function App() {

  return (
    <div className='w-full h-screen bg-[#154c79] flex-center'>
      <LoginAndSignup/>
      <Home/>
    </div>
  )
}

export default App
