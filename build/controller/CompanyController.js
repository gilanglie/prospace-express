"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const companyGetAllAction_1 = require("../action/Company/companyGetAllAction");
const companyGetByIdAction_1 = require("../action/Company/companyGetByIdAction");
const companyDeleteByIdAction_1 = require("../action/Company/companyDeleteByIdAction");
const companyPostAction_1 = require("../action/Company/companyPostAction");
const companyPutByIdAction_1 = require("../action/Company/companyPutByIdAction");
exports.default = {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return companyGetAllAction_1.companyGetAllAction(req, res);
        });
    },
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return companyGetByIdAction_1.companyGetByIdAction(req, res);
        });
    },
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return companyDeleteByIdAction_1.companyDeleteByIdAction(req, res);
        });
    },
    postCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return companyPostAction_1.companyPostAction(req, res);
        });
    },
    putCompanyById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return companyPutByIdAction_1.companyPutByIdAction(req, res);
        });
    }
};
//# sourceMappingURL=CompanyController.js.map