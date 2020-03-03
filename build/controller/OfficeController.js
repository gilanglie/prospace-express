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
const officeGetAllAction_1 = require("../action/Office/officeGetAllAction");
const officeGetByIdAction_1 = require("../action/Office/officeGetByIdAction");
const officeDeleteByIdAction_1 = require("../action/Office/officeDeleteByIdAction");
const officePostAction_1 = require("../action/Office/officePostAction");
const officePutByIdAction_1 = require("../action/Office/officePutByIdAction");
exports.default = {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return officeGetAllAction_1.officeGetAllAction(req, res);
        });
    },
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return officeGetByIdAction_1.officeGetByIdAction(req, res);
        });
    },
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return officeDeleteByIdAction_1.officeDeleteByIdAction(req, res);
        });
    },
    postOffice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return officePostAction_1.officePostAction(req, res);
        });
    },
    putOfficeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return officePutByIdAction_1.officePutByIdAction(req, res);
        });
    }
};
//# sourceMappingURL=OfficeController.js.map