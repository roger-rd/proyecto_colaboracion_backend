import { Router } from "express";
import {userController} from "./user.controller.js"


const router = Router();

router.get('/', userController.getRaiz);
router.get('/usuarios', userController.getAllUser);
router.post('/register',userController.registerUser);
router.post('/login', userController.loginUser);

export default router;
