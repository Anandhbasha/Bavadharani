import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navabar from './Components/Navbar/Navbar'
import AllProducts from './Pages/AllProducts/AllProducts'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import Kids from './Pages/Kids/Kids'
import MensShirt from "./assets/Images/Shirt.jpg"

const App = () => {
  const Products = [
    {
      prodCat:"Mens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Mens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Mens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Mens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    }
    ,{
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    }
    ,{
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    },
    {
      prodCat:"Womens",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:MensShirt
    }
  ]
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