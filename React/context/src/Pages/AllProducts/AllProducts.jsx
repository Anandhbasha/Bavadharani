import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassingValue } from '../../App'

const AllProducts = () => {
  const {Products} = useContext(PassingValue)
  console.log(Products);
  
  return (
    <div className='AllProducts' style={{display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"30px",justifyContent:"center"}}>
      {Products.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default AllProducts