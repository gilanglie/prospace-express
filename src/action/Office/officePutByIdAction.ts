import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Office } from "../../entity/Office";


export async function officePutByIdAction(req: Request, res: Response) {
  const officeRepository = getManager().getRepository(Office);
  const office = await officeRepository.findOne(req.params.id);
  officeRepository.merge(office, req.body);
  const results = await officeRepository.save(office);
  res.send(results);
}
