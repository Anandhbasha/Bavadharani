import express from "express"
import { addProduct, readProduct } from "../Controller/productController.js"

const router = express.Router()

router.post("/addNew",addProduct)
router.get("/",readProduct)

export default router