import { Router } from 'express';
import { MakeACall } from '../modules/twilio/useCases/Call/MakeACall';
import { sendMessage } from '../modules/twilio/useCases/Messaging/SendMessage';
import { webhookWhatsapp } from '../modules/twilio/useCases/Messaging/WebhookWhatsapp';
import { sendVerifyToken } from '../modules/twilio/useCases/Verify/SendVerifyToken';
import { verifyToken } from '../modules/twilio/useCases/Verify/VerifyToken';
import { webhookVerify } from '../modules/twilio/useCases/Verify/WebhookVerify';

const twilioRoutes = Router();

twilioRoutes.post('/messages/send-message', sendMessage);
twilioRoutes.post('/messages/whatsapp-callback', webhookWhatsapp);

twilioRoutes.post('/verify/send-token', sendVerifyToken);
twilioRoutes.post('/verify/verify-token', verifyToken);
twilioRoutes.post('/verify/verify-callback', webhookVerify);

twilioRoutes.post('/calls/make-a-call', MakeACall);

export { twilioRoutes };
