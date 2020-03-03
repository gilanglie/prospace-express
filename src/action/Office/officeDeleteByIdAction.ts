import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Office } from "../../entity/Office";


export async function officeDeleteByIdAction(req: Request, res: Response) {
  const officeRepository = getManager().getRepository(Office);
  const results = await officeRepository.delete(req.params.id);
  res.send(results);
}
