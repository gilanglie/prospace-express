import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Company } from "../../entity/Company";


export async function companyPutByIdAction(req: Request, res: Response) {
  const companyRepository = getManager().getRepository(Company);
  const company = await companyRepository.findOne(req.params.id);
  companyRepository.merge(company, req.body);
  const results = await companyRepository.save(company);
  res.send(results);
}
