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
const typeorm_1 = require("typeorm");
const Company_1 = require("../../entity/Company");
function companyPatchByIdAction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const companyRepository = typeorm_1.getManager().getRepository(Company_1.Company);
        const company = yield companyRepository.findOne(req.params.id);
        if (!company) {
            res.status(404);
            res.end();
            return;
        }
        res.send(company);
    });
}
exports.companyPatchByIdAction = companyPatchByIdAction;
//# sourceMappingURL=companyPatchByIdAction.js.map