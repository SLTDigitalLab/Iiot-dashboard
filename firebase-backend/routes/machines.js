import express from 'express';
const router= express.Router();
import { getMachinesBySection,getCurrentValuesByMachine} from './../Controllers/machineController.js';
router.get('/:id/machines',getMachinesBySection);
router.get('/:id/:machine_id',getCurrentValuesByMachine);

export default router;