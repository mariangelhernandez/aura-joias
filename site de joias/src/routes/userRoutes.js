import {Router} from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.get('/users', userController.getAll);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete); 

export default router;