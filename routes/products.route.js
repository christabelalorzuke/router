const router = require("express").Router;
const { 
    getProducts, 
    createProduct,
    updateProduct,
    deleteProduct,
 } = require("../controllers/products.controllers");

const productsRouter = router();

productsRouter.get("/", getProducts)
productsRouter.post("/", createProduct)
productsRouter.patch("/", updateProduct)
productsRouter.delete("/",deleteProduct)

module.exports = productsRouter;

