import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Company } from "../../entity/Company";


export async function companyGetByIdAction(req: Request, res: Response) {
  const companyRepository = getManager().getRepository(Company)
  
  const company = await companyRepository.findOne(req.params.id,{relations: ['offices']});
  if (!company) {
    res.status(404);
    res.end();
    return;
  }
  res.send(company);
}
