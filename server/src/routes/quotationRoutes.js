import { Router } from "express";
import { createQuotation, deleteQuotation, getQuotationById, getQuotations, updateQuotation } from "../controllers/quotationController.js";
import { addQuotationItem, deleteQuotationItem, updateQuotationItem } from "../controllers/quotationItemsController.js";

const router = Router();

// Quotation routes
router.post('/', createQuotation);
router.get('/', getQuotations);
router.get('/:id',getQuotationById);
router.put('/:id',updateQuotation)
router.delete('/:id', deleteQuotation);


// Quotation item routes
router.post('/:id/items', addQuotationItem);
router.put('/:id/items/:itemId', updateQuotationItem);
router.delete('/:id/items/:itemId', deleteQuotationItem);

export default router;