import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import Landing from './components/Landing'
import Riddle from './components/Riddle'
import Invitation from './components/Invitation'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="vignette"></div>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/success' element={<Invitation/>}/>
    </Routes>    
    </>

  )
}

export default App
