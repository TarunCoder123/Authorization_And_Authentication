const express=require("express");
const cors=require("cors");
const userController=require('../controllers/user');
const authMiddleware=require("../util/authMiddleware");

const router=express.Router();

router.use(cors());

router.get("/users",authMiddleware.authenticateToken, userController.getUsers);

module.exports=router;