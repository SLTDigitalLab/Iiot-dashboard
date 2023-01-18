import express from 'express';
const router= express.Router();
import { getSectionsByCompany} from './../Controllers/customizeController.js';
import { getSectionsAndMachines } from './../Controllers/customizeController.js';

router.get('/sections',getSectionsByCompany);
router.get('/:id',getSectionsAndMachines);
export default router;