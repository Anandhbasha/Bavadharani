import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProduct from "./AddProduct"
import "./App.css"
import ShowProd from "./ShowProd"
import Navbar from "./Navbar"
const App = ()=>{
  return(
    <BrowserRouter>
      <div className="App" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/show" element={<ShowProd/>}/>
      <Route path="/" element={<AddProduct/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App