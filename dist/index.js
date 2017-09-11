"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const process_1 = require("process");
const websocket = require("ws");
const requestCreate = require('./messages/requestcreategame');
const SC2PATH = process_1.env['SC2PATH'];
class SC2Node {
    launchSC2() {
        const sc2exe = SC2PATH || "C:/Program Files (x86)/Starcraft II/";
        this.sc2 = child_process_1.spawn("../Versions/Base56787/SC2_x64.exe", ["-listen", "127.0.0.1", "-port", "8190", "-displayMode", "0"], { cwd: sc2exe + "/Support64" });
        this.sc2.on('error', (error) => console.error('SC2 error, ', error));
        this.sc2.on('close', (code) => console.log('SC2 closed with code, ' + code));
        this.sc2.on('exit', (exit) => console.log('SC2 exited because,', exit));
    }
    connectWebsocket() {
        this.ws = new websocket('ws://127.0.0.1:8190/sc2api');
        this.ws.on('open', () => console.log('Websocket opened to SC2'));
        this.ws.on('message', (data) => console.log("wsdata", data));
        this.ws.on("error", (error) => console.error("wserror", error));
    }
    createGame() {
        const req = new requestCreate.requestcreategame();
        this.ws.send(req);
    }
}
exports.SC2Node = SC2Node;
//# sourceMappingURL=index.js.map