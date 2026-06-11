import React, { useContext } from 'react'
import "./Card.css"
import { PassingValue } from '../../App'
const Card = ({prodName,prodPrice,prodDesc,image}) => {
    const {count,setCount} = useContext(PassingValue)
  return (
    <div className='Card'>
        <div className='cardTop'>
            <img src={image}></img>
        </div>
        <div className='cardBtm'>
            <h2>{prodName}</h2>
            <h2>{prodPrice}</h2>
            <p>{prodDesc}</p>
        </div>
        <div className='cardButton'>
            <button onClick={()=>setCount((prev)=>++prev)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card