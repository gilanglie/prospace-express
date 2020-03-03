import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Office } from "../../entity/Office";


export async function officeGetAllAction(req: Request, res: Response) {
  const officeRepository = getManager().getRepository(Office);
  const office = await officeRepository.find();

  res.send(office);
}
