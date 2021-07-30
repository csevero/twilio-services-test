import { Request, Response } from 'express';
import { Twilio } from 'twilio';

async function sendVerifyToken(req: Request, res: Response): Promise<Response> {
  const { to, channel } = req.body;
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = new Twilio(accountSid!, authToken!);

  try {
    const sendToken = await client.verify
      .services('VA6a185af9a781003b53192cfc000264ca')
      .verifications.create({
        to,
        channel,
        locale: 'pt-BR',
      });

    return res.json(sendToken);
  } catch (err) {
    return res.json(err);
  }
}

export { sendVerifyToken };
