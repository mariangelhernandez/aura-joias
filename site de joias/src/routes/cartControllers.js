import {Router} from "express";
import {cartController} from "../controllers/cartController.js"; 

const router = Router();

router.get('/cart', cartlController.getAll);
router.post('/cart', cartController.create);
router.put('/cart/:id', cartController.update);
router.patch('/cart/:id', cartController.patch); 
router.delete('/cart/:id', cartController.delete); 

export default router;