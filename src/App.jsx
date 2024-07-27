import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Routes>
    <Route path="/home" element={<h1>
      home
     </h1>}></Route>
    <Route path="/about" element={ <h1>
      about
     </h1>}></Route>
     </Routes>

     {/* <h1>
      home
     </h1>
     <h1>
      about
     </h1> */}

    
     
    </>
  )
}

export default App
