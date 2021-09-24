import sgMail from '@sendgrid/mail';
import { Request, Response } from 'express-serve-static-core';

async function sendEmail(req: Request, res: Response): Promise<void> {
  const { to, from, subject } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg = {
    to,
    from,
    subject,
    text: 'Is really easy send and email with Nodejs',
    html: '<strong>VERY EASY</strong>',
  };

  sgMail
    .send(msg)
    .then(result => res.json(result))
    .catch(error => res.json(error));
}

export { sendEmail };
