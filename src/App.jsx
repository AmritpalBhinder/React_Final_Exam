import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import AllRoutes from './Routes/allRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", }}>
        <Navbar />
        <AllRoutes />
    </div>
  )
}

export default App
