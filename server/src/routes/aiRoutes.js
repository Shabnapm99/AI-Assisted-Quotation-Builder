import { Router } from "express";
import { generateAIDraft } from "../controllers/aiController.js";

const router = Router();

router.post('/draft',generateAIDraft)

export default router;