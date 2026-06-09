import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navabar from './Components/Navbar/Navbar'
import AllProducts from './Pages/AllProducts/AllProducts'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import Kids from './Pages/Kids/Kids'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
          <Navabar/>
      </div>
      <Routes>
        <Route path='/' element={<AllProducts/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/womens' element={<Womens/>}/>
        <Route path='/kids' element={<Kids/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App