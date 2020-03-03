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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes_1 = require("./routes");
typeorm_1.createConnection()
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const app = express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(logger("dev"));
    routes_1.AppRoutes.forEach(route => {
        app[route.method](route.path, (req, res, next) => {
            route
                .action(req, res)
                .then(() => next)
                .catch(err => next(err));
        });
    });
    app.listen(5000, () => {
        console.log("Express application is up ansd running on port 5000");
    });
}))
    .catch(err => console.log(`TypeORM connection error: ${err}`));
//# sourceMappingURL=index.js.map