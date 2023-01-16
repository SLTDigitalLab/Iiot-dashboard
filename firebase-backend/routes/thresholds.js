import express from 'express';
const router= express.Router();
import { getMinimumValuesByMachine,getMaximumValuesByMachine } from '../Controllers/thresholdController.js'

router.get('/max/:id/:machine_id',getMaximumValuesByMachine);

export default router;