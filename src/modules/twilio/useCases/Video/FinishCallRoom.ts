import { Request, Response } from 'express';
import { Twilio } from 'twilio';

async function finishCallRoom(req: Request, res: Response): Promise<Response> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = new Twilio(accountSid!, authToken!);

  const { roomName } = req.body;

  //não existe um método específico para encerrar uma call de vídeo, mas podemos usar o fetch e o update passando o status completed para encerrar uma call
  client.video
    .rooms(roomName)
    .fetch()
    .then(room => {
      console.log(room);
      client.video
        .rooms(room.sid)
        .update({ status: 'completed' })
        .then(room => {
          console.log(room);
          return res.json({ success: true, room: room });
        });
    })
    .catch(err => {
      console.log(err);
    });

  return res.send();
}

export { finishCallRoom };
