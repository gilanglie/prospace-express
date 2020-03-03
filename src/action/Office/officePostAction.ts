import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Office } from "../../entity/Office";


export async function officePostAction(req: Request, res: Response) {
  const officeRepository = getManager().getRepository(Office);
  const office = await officeRepository.create(req.body);
  const results = await officeRepository.save(office);
  res.send(results);
}