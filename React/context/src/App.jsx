import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navabar from './Components/Navbar/Navbar'
import AllProducts from './Pages/AllProducts/AllProducts'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import Kids from './Pages/Kids/Kids'
import MensShirt from "./assets/Images/download.webp"
import womenShirt from "./assets/Images/wom.jpg"
import KidShirt from "./assets/Images/kid.jpg"

export const PassingValue = createContext()
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
      image:womenShirt
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
    },
    {
      prodCat:"Kids",
      prodName:"MensShirt",
      prodPrice:300,
      prodDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium dolorem ad saepe nesciunt labore veniam nihil aut. Atque magnam unde quos quaerat excepturi! Quia, ipsum dolorum. Quas, facere aliquid.",
      image:KidShirt
    }
  ]
  const [count,setCount] = useState(0)
  return (
    <BrowserRouter>
      <PassingValue.Provider value={{Products,count,setCount}}>
        <div className='App'>
          <Navabar/>
        </div>
        <Routes>
          <Route path='/' element={<AllProducts/>}/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/womens' element={<Womens/>}/>
          <Route path='/kids' element={<Kids/>}/>
        </Routes>
      </PassingValue.Provider>
    </BrowserRouter>
  )
}

export default App