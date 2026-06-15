// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addCount, changeBg } from './Slice/Slice'

// const App = () => {
//   const dispatch = useDispatch()
//   const count = useSelector((state)=>state.numberCount.count)
//   const backdrops = useSelector((state)=>state.numberCount.bg)
//   return (
//     <div className='App'>
//       <p>{count}</p>
//       <button onClick={()=>dispatch(addCount(1))}>Count</button>
//       <button onClick={()=>dispatch(changeBg())}>{backdrops}</button>
//     </div>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await axios.get("https://fakestoreapi.com/products")
        if(!res){
          throw Error("Unable to connect The API")
        }
        const showData = res.data
        setProducts(showData)
        console.log(showData);
        
      }catch(err){
        console.log(err);
        
      }
    }
    fetchData()
  },[])
  return (
    <div className='App'>

    </div>
  )
}

export default App