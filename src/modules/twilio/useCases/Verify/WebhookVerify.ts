import { Request, Response } from 'express';

async function webhookVerify(req: Request, res: Response) {
  console.log(req.body);
}

export { webhookVerify };
