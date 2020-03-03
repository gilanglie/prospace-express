import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Office } from "../../entity/Office";


export async function officeGetByIdAction(req: Request, res: Response) {
  const officeRepository = getManager().getRepository(Office);
  const office = await officeRepository.findOne(req.params.id);

  if (!office) {
    res.status(404);
    res.end();
    return;
  }
  res.send(office);
}
