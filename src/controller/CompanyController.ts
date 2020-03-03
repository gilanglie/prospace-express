import { Request, Response } from "express";
import { companyGetAllAction } from "../action/Company/companyGetAllAction";
import { companyGetByIdAction } from "../action/Company/companyGetByIdAction";
import { companyDeleteByIdAction } from "../action/Company/companyDeleteByIdAction";
import { companyPostAction } from "../action/Company/companyPostAction";
import { companyPutByIdAction } from "../action/Company/companyPutByIdAction";

export default {
  async getAll(req: Request, res: Response) {
    return companyGetAllAction(req, res);
  },
  async getById(req: Request, res: Response) {
    return companyGetByIdAction(req, res);
  },
  async deleteById(req: Request, res: Response) {
    return companyDeleteByIdAction(req, res);
  }, 
  async postCompany(req: Request, res: Response) {
    return companyPostAction(req, res);
  },
  async putCompanyById(req: Request, res: Response) {
    return companyPutByIdAction(req, res);
  }
};
