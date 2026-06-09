import React, { useEffect, useState } from 'react'

const App = () => {
  const [switches,setSwitches] = useState(false)
  useEffect(()=>{
    console.log("Hello Welcome to useEffect");    
  },[switches])
  return (
    <div className='App'>
        <button onClick={()=>setSwitches(switches===false?true:false)}>{switches===false?"Off":"On"}</button>
    </div>
  )
}

export default App