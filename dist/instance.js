"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
class instance {
    constructor(baseUrl, url) {
        this.ws = new ws_1.default(baseUrl + url);
    }
    ;
}
exports.default = instance;
