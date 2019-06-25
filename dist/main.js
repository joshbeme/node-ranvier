"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const instance_1 = __importDefault(require("./instance"));
const ws_1 = __importDefault(require("ws"));
const test = new ws_1.default('ws://localhost:8080/api/config/ws/StagingUsers');
test.on('open', (d) => {
    console.log(d);
});
test.on('ping', (a) => console.log(a, 'stuff'));
test.on('error', (err) => console.error(err));
class Ranvier {
    constructor(ranvierInit) {
        this._cache = new Map;
        let urlSplit = ranvierInit.url.split('');
        let url = urlSplit.join('');
        if (urlSplit[urlSplit.length - 1] === '/') {
            urlSplit.pop();
            url = urlSplit.join('');
        }
        this._baseUrl = url;
    }
    connect(urls) {
        if (urls)
            urls.forEach((url, index) => {
                this.ranvierInstance[url] = new instance_1.default(this._baseUrl, url);
                this.ranvierInstance[url]('error', (err) => console.error(err));
            });
    }
    disconnect() {
    }
    query(query) {
    }
}
;
// const client: Ranvier = new Ranvier({url:'ws:localhost:8080/api/config/', configDirectory:'/'});
