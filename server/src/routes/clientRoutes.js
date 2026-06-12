import { Router } from "express";
import { addClient, deleteClient, getAClient, getClients, updateClient } from "../controllers/clientController.js";

const router = Router();

router.post('/', addClient);
router.get('/', getClients);
router.get('/:id',getAClient);
router.put('/:id',updateClient)
router.delete('/:id', deleteClient);

export default router;