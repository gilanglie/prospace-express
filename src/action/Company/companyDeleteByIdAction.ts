import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Company } from "../../entity/Company";


export async function companyDeleteByIdAction(req: Request, res: Response) {
  const companyRepository = getManager().getRepository(Company);
  const results = await companyRepository.delete(req.params.id);
  res.send(results);
}
