import { Request, Response } from 'express';

async function webhookWhatsapp(req: Request, res: Response) {
  res.append('Content-Type', 'application/json');
  console.log(req);

  return res.json({ success: true });
}

export { webhookWhatsapp };
