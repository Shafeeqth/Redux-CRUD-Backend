import express, { Express, Router } from "express";
const router: Router = express.Router();
import * as userController from '../controllers/userController';


router.post('/login', userController.verifyUser)
router.post('/signup', userController.userRegister  )
router.get('/login', )
router.get('/login', )
router.get('/login', )
router.get('/login', )







export default router;