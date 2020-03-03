"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyController_1 = require("./controller/CompanyController");
exports.AppRoutes = [
    {
        path: "/company",
        method: "get",
        action: CompanyController_1.default.getAll
    },
    {
        path: "/company/:id",
        method: "get",
        action: CompanyController_1.default.getById
    },
    {
        path: "/company/:id",
        method: "delete",
        action: CompanyController_1.default.deleteById
    },
    {
        path: "/company",
        method: "post",
        action: CompanyController_1.default.postCompany
    },
    {
        path: "/company/:id",
        method: "put",
        action: CompanyController_1.default.putCompanyById
    }
];
//# sourceMappingURL=routes.js.map