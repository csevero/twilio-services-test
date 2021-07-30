import { Router } from 'express';
import { twilioRoutes } from './twilio.routes';

const router = Router();

router.use('/twilio', twilioRoutes);

export { router };
