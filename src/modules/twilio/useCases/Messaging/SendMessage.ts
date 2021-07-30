import { Request, Response } from 'express';
import { Twilio } from 'twilio';

async function sendMessage(req: Request, res: Response): Promise<Response> {
  // sandbox credentials
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioSMSNumber = process.env.TWILIO_SMS_NUMBER;
  const twilioWhatsNumber = process.env.TWILIO_WHATSAPP_NUMBER;

  const client = new Twilio(accountSid!, authToken!);

  const myNumber = '+5515996605712';
  const template = `Your {{1}} code is {{2}}`;
  const img = 'https://pngimg.com/uploads/dog/dog_PNG50348.png';

  const templateFormatted = template
    .replace('{{1}}', 'Facebook')
    .replace('{{2}}', '12345');

  const type = 'sms' || 'whatsapp';

  try {
    const message = await client.messages.create({
      to: type === 'sms' ? `${myNumber}` : `whatsapp:${myNumber}`,
      from:
        type === 'sms' ? `${twilioSMSNumber}` : `whatsapp:${twilioWhatsNumber}`,
      body: `${templateFormatted}`,
      mediaUrl: `${img}` || undefined,
    });

    return res.json(message);
  } catch (err) {
    return res.json(err);
  }
}

export { sendMessage };
