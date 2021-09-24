import { Request, Response } from 'express';

async function webhookEmail(req: Request, res: Response): Promise<Response> {
  console.log(req);
  console.log(res);

  return res.send();
}

export { webhookEmail };
