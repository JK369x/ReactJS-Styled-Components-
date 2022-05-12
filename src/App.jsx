import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import  NavBar  from './components/Nav'
import Home from './page/Home'
import About from './page/About'
import Blog from './page/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Blog' element={<Blog/>} />
    </Routes> 
    </> 
  )
}

export default App
