import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Login></Login>}>Login Page</Route>
        <Route path='/registration' element={<Registration></Registration>}>Registration Page</Route>
        <Route path='/home' element={<Home></Home>}>Home Page</Route>
      </Routes>
    </div>
    </>
  )
}

export default App
