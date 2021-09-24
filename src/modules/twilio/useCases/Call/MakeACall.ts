import { Request, Response } from 'express';
import { Twilio } from 'twilio';

// Function faz uma ligação para um número desejado
async function makeACall(req: Request, res: Response): Promise<Response> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioCallNumber = process.env.TWILIO_CALL_NUMBER;
  const myNumber = process.env.MY_NUMBER;

  const { tts } = req.body;

  const client = new Twilio(accountSid!, authToken!);
  
  try {
    const call = await client.calls.create({
      to: `${myNumber}`,
      from: `${twilioCallNumber}`,
      twiml: `<Response><Say voice="alice" language="pt-BR">${tts}</Say></Response>`,
    });

    return res.json(call);
  } catch (err) {
    return res.status(400).json(err);
  }
}

export { makeACall };
