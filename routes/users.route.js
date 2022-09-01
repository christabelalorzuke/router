const router = require("express").Router;
const { 
    getUsers, 
    createUser,
    updateUser,
    deleteUser,
 } = require("../controllers/users.controllers");

const userRouter = router();

userRouter.get("/",getUsers)
userRouter.post("/",createUser)
userRouter.patch("/",updateUser)
userRouter.delete("/",deleteUser)

module.exports = userRouter;

