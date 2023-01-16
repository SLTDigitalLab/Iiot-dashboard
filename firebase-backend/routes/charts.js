import express from 'express';
const router= express.Router();
import { getValuesBySensor} from './../Controllers/chartsController.js';
router.get('/:id/:machine_id/:sensor',getValuesBySensor);

export default router;