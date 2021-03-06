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
const Office_1 = require("../../entity/Office");
function officeDeleteByIdAction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const officeRepository = typeorm_1.getManager().getRepository(Office_1.Office);
        const results = yield officeRepository.delete(req.params.id);
        res.send(results);
    });
}
exports.officeDeleteByIdAction = officeDeleteByIdAction;
//# sourceMappingURL=officeDeleteByIdAction.js.map