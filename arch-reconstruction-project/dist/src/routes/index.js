"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const glob_1 = __importDefault(require("glob"));
const register = (app) => {
    const oidc = app.locals.oidc;
    // define a route handler for the default home page
    app.get('/', (req, res) => {
        // options is optional
        glob_1.default('../../../Zeeguu-API/**/*.py', {}, (er, files) => {
            console.log(er);
            console.log(files);
        });
        res.render('index');
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map