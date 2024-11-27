import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middlewares/AuthMiddleWare.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
const router = Router();
router.post('/auth/login', AuthController.login);

router.post('/chat-group',authMiddleware, ChatGroupController.store);
router.get('/chat-group',authMiddleware, ChatGroupController.index);
router.get('/chat-group/:id',authMiddleware, ChatGroupController.show);
router.put('/chat-group/:id',authMiddleware, ChatGroupController.update);
router.delete('/chat-group/:id',authMiddleware, ChatGroupController.destroy);


export default router;
