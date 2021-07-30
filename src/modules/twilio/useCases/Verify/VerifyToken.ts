import { Request, Response } from 'express';
import { Twilio } from 'twilio';

async function verifyToken(req: Request, res: Response): Promise<Response> {
  const { code, to } = req.body;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = new Twilio(accountSid!, authToken!);

  try {
    const result = await client.verify
      .services('VA6a185af9a781003b53192cfc000264ca')
      .verificationChecks.create({
        to,
        code,
      });

    return res.json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
}

export { verifyToken };
