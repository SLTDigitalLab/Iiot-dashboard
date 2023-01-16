import express from 'express';
const router= express.Router();
import { getSectionsByCompany} from './../Controllers/customizeController.js';

router.get('/sections',getSectionsByCompany);

export default router;