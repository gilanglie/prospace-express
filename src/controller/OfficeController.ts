import { Request, Response } from "express";
import { officeGetAllAction } from "../action/Office/officeGetAllAction";
import { officeGetByIdAction } from "../action/Office/officeGetByIdAction";
import { officeDeleteByIdAction } from "../action/Office/officeDeleteByIdAction";
import { officePostAction } from "../action/Office/officePostAction";
import { officePutByIdAction } from "../action/Office/officePutByIdAction";

export default {
  async getAll(req: Request, res: Response) {
    return officeGetAllAction(req, res);
  },
  async getById(req: Request, res: Response) {
    return officeGetByIdAction(req, res);
  },
  async deleteById(req: Request, res: Response) {
    return officeDeleteByIdAction(req, res);
  }, 
  async postOffice(req: Request, res: Response) {
    return officePostAction(req, res);
  },
  async putOfficeById(req: Request, res: Response) {
    return officePutByIdAction(req, res);
  }
};
