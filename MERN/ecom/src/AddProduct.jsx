import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate()
    const API = "http://localhost:4000/ecom"
    const [products,setProducts] = useState(
        {
            name:"",
            price:"",
            category:"",
            description:""
        }
    )
    const handleChange = (e)=>{
        setProducts({
            ...products,
                [e.target.name]:e.target.value            
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${API}/addNew`,products)
            alert(res.data.message)
            setProducts({
                name:"",
                price:"",
                category:"",
                description:""
            })
            navigate("/show")
        } catch (error) {
            console.log(err);
            alert("Failed to Add")
        }
    }
  return (
       <div className='AddProduct' style={{width:"500px",display:"flex",flexDirection:"column",gap:"20px",padding:"30px",backgroundColor:"#55d5e9",color:"rebeccapurple",fontSize:"1.2em",fontWeight:"bold"}}>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"40px",textAlign:"left"}}>
            <div className='productName' style={{display:"flex",gap:"30px",width:"100%",textAlign:"left"}}>
                <label htmlFor='prodName'>prodName:</label>
                <input type='text' name="name" placeholder='Enter the Product Name' value={products.name} onChange={handleChange} id='prodName'></input>
            </div>
            <div className='productprice' style={{display:"flex",gap:"30px",width:"100%",textAlign:"left"}}>
                <label htmlFor='prodprice'>prodprice:</label>
                <input type='text' name="price" placeholder='Enter the Product price' value={products.price} onChange={handleChange} id='prodprice'></input>
            </div>
            <div className='productCategory' style={{display:"flex",gap:"30px",width:"100%",textAlign:"left"}}>
                <label htmlFor='prodCategory'>prodCategory:</label>
                <input type='text' name="category" placeholder='Enter the Product Category' value={products.category} onChange={handleChange} id='prodCategory'></input>
            </div>
            <div className='productdescription' style={{display:"flex",gap:"30px",width:"100%",textAlign:"left"}}>
                <label htmlFor='proddescription'>proddescription:</label>
                <input type='text' name="description" placeholder='Enter the Product description' value={products.description} onChange={handleChange} id='proddescription'></input>
            </div>
            <button type='submit' style={{padding:"10px 30px",borderRadius:"10px",border:"none",fontSize:"1.2em",fontWeight:"bold",backgroundColor:"#12121f"}}>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct