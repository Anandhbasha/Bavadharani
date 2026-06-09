import React from 'react'
import "./Card.css"
const Card = () => {
  return (
    <div className='Card'>
        <div className='cardTop'>
            <img src=''></img>
        </div>
        <div className='cardBtm'>
            <h2>ProductName</h2>
            <h2>ProductPrice</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aut et asperiores veritatis aliquid ea labore. In, totam incidunt culpa, obcaecati suscipit unde aut dolores laudantium illum a esse eveniet.</p>
        </div>
        <div className='cardButton'>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card