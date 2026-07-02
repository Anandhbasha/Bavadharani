import Product from "../Model/Product.js"

export const addProduct = async(req, res) => {
    try {
        const {name,price,category,description} = req.body
        const existingProduct = await Product.findOne({name})
        if(existingProduct){
            res.status(404).json({message:"Product already exist"})
        }
        else{
            const addProd = await Product({name,price,category,description}).save()
            res.status(200).json({message:"Product Added sucessfully",product:addProd})

        }
    } catch (error) {
        res.status(404).json({message:"Unable to add the Product"})
    }
}

export const readProduct = async(req,res)=>{
    try {
        const readProd = await Product.find()
        res.status(200).json({message:"Fetch is Succesfully",data:readProd})
    } catch (error) {
        res.status(400).json({message:"unable to Fetch"})
    }
}