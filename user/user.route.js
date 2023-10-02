import { Router } from "express";
import {userController } from "./user.controller.js"

// import { loginValidateBody } from "../middlewares/login.middleware.js";

import { verifyTokenUser } from "../middlewares/verifyTokenUser.middleware.js";

const router = Router();

router.get('/', userController.getRaiz);
router.get('/usuarios', userController.getAllUser);
router.post('/register',userController.registerUser);
router.post('/login',verifyTokenUser ,userController.loginUser);

//rutas de productos 
router.get('/get-products', userController.getAllProducts);
router.get('/get-product', userController.getProduct);


export default router;
