import { Request, Response } from 'express';
import { Twilio } from 'twilio';

async function createRoom(req: Request, res: Response): Promise<Response> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = new Twilio(accountSid!, authToken!);

  //criando uma sala de vídeo com nome first-room
  try {
    const room = await client.video.rooms.create({ uniqueName: 'first-room' });

    return res.json(room);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, err });
  }
}

export { createRoom };
