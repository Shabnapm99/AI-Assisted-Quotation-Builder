import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";

const router = Router();

router.post('/login', login);
router.post('/register', register);
// router.get('/profile', validateToken, profile);
router.post('/logout', logout);

export default router;