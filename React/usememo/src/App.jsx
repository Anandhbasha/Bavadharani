// import React, { useState } from 'react'

// const App = () => {
//   const [count,setCount] = useState(0)
//   const [bg,setBg] = useState("dark")

//   const square = ()=>{
//     console.log("Square value");
//     return count*count    
//   }
//   let sq = square()
//   return (
//     <div className='App'>
//       <p>{sq}</p>
//       <button onClick={()=>setCount((prev)=>++prev)}>Addcount {count} </button>
//       <button onClick={()=>setBg("light")}>{bg}</button>
//     </div>
//   )
// }

// export default App


import React, { useMemo, useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)
  const [bg,setBg] = useState("dark")

  const square = ()=>{
    console.log("Square value");
    return count*count    
  }
  
  let sq = useMemo(()=>{
    return square()
  },[count])
  return (
    <div className='App'>
      <p>{sq}</p>
      <button onClick={()=>setCount((prev)=>++prev)}>Addcount {count} </button>
      <button onClick={()=>setBg("light")}>{bg}</button>
    </div>
  )
}

export default App