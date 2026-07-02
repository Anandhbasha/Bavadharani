import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowProd = () => {
    const [prods,setProds] = useState([])
    const API = "http://localhost:4000/ecom"
    useEffect(()=>{
        const getData = async()=>{
            const res = await axios.get(`${API}`)
            if(!res){
                throw Error("Unable to connect the API")
            }
            else{
                setProds(await res.data.data);
            }
        }
        getData()
    },[])
    console.log(prods);
    
  return (
    <div className='ShowProd'>
        {prods.map((item)=>(
            <>
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <h1>{item.category}</h1>
            <h1>{item.description}</h1>
            </>
        ))}
    </div>
  )
}

export default ShowProd