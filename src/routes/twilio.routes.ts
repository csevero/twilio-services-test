import { Router } from 'express';
import { makeACall } from '../modules/twilio/useCases/Call/MakeACall';
import { sendEmail } from '../modules/twilio/useCases/Email/SendEmail';
import { webhookEmail } from '../modules/twilio/useCases/Email/WebhookEmail';
import { sendMessage } from '../modules/twilio/useCases/Messaging/SendMessage';
import { webhookWhatsapp } from '../modules/twilio/useCases/Messaging/WebhookWhatsapp';
import { sendVerifyToken } from '../modules/twilio/useCases/Verify/SendVerifyToken';
import { verifyToken } from '../modules/twilio/useCases/Verify/VerifyToken';
import { webhookVerify } from '../modules/twilio/useCases/Verify/WebhookVerify';
import { createRoom } from '../modules/twilio/useCases/Video/CreateRoom';
import { finishCallRoom } from '../modules/twilio/useCases/Video/FinishCallRoom';

const twilioRoutes = Router();

twilioRoutes.post('/messages/send-message', sendMessage);
twilioRoutes.post('/messages/whatsapp-callback', webhookWhatsapp);

twilioRoutes.post('/verify/send-token', sendVerifyToken);
twilioRoutes.post('/verify/verify-token', verifyToken);
twilioRoutes.post('/verify/verify-callback', webhookVerify);

twilioRoutes.post('/calls/make-a-call', makeACall);

twilioRoutes.post('/email/send-email', sendEmail);
twilioRoutes.post('/email/email-callback', webhookEmail);

twilioRoutes.post('/video/create-room', createRoom);
twilioRoutes.post('/video/finish-call', finishCallRoom);

export { twilioRoutes };
