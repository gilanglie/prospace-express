import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Company } from "../../entity/Company";


export async function companyGetAllAction(req: Request, res: Response) {
  const companyRepository = getManager().getRepository(Company);
  const company = await companyRepository.find();

  res.send(company);
}
