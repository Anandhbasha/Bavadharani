// import Card from "./Card"

import Card from "./Card"

// const App =()=>{
//   return (
//     <div className="App" style={{display:"flex",gap:"20px"}}>
//       <Card color="white" btnColor="orange" fontColor = "black" price="$19"/>
//       <Card color="steelblue" btnColor="white" fontColor = "white" price="$39"/>
//       <Card color="brown" btnColor="white" fontColor = "white" price="$49"/>
//     </div>
//   )
// }

// export default App


const App = ()=>{
  const Data = [
    {
      color:"white" ,
      btnColor:"orange" ,
      fontColor : "black" ,
      price:"$19"
    },
    {
      color:"steelblue" ,
      btnColor:"white" ,
      fontColor : "white" ,
      price:"$39"
    },
    {
      color:"brown" ,
      btnColor:"white" ,
      fontColor : "white" ,
      price:"$49"
    },

  ]
  return(
    <div className="App" style={{display:"flex",gap:"20px"}}>
        {Data.map((item)=>(
          <Card {...item}/>
        ))}
    </div>
  )
}

export default App