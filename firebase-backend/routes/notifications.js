import express from 'express';
const router= express.Router();
import { getCurrentValuesByMachineSendNotifications} from './../Controllers/notificationController.js';
router.get('/:id/:machine_id',getCurrentValuesByMachineSendNotifications);

export default router;