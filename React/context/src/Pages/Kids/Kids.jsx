import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassingValue } from '../../App'

const Kids = () => {
  const {Products} = useContext(PassingValue)
  const Kids = Products.filter((item)=>item.prodCat==="Kids")
  return (
    <div className='Kids'>
        {Kids.map((item)=>(
          <Card {...item} />
        ))}
    </div>
  )
}

export default Kids