import React, { useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)
  let [bg,setBg] = useState(false)
  const handleCount =()=>{
    setCount(++count)
    console.log(count);
    
  }
  const handleBg = ()=>{
    setBg(bg===false?true:false)
  }
  return (
    <div className='App' style={{width:"100%",height:"100vh",backgroundColor:bg===false?"black":"white"}}>
      <p>{count}</p>
      <button onClick={handleCount}>AddCount</button>
      <button onClick={handleBg}>{bg===false?"dark":"light"}</button>
    </div>
  )
}

export default App

// table 50
// table-> thead, th ,tr,td -> first index object keys-> map-> th
// dropdown->5,10,20,30,50
// table value is depends upon selction of option ->slice
