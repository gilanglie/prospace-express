import CompanyController from "./controller/CompanyController";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/company",
    method: "get",
    action: CompanyController.getAll
  },
  {
    path: "/company/:id",
    method: "get",
    action: CompanyController.getById
  },
  {
    path: "/company/:id",
    method: "delete",
    action: CompanyController.deleteById
  },
  {
    path: "/company",
    method: "post",
    action: CompanyController.postCompany
  },
  {
    path: "/company/:id",
    method: "put",
    action: CompanyController.putCompanyById
  }
];
