import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Company } from "../../entity/Company";


export async function companyPostAction(req: Request, res: Response) {
  const companyRepository = getManager().getRepository(Company);
  const company = await companyRepository.create(req.body);
  const results = await companyRepository.save(company);
  res.send(results);
}