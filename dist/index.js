"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const process_1 = require("process");
const SC2PATH = process_1.env['SC2PATH'];
class SC2Node {
    constructor(path, args) {
        console.log(path, args);
        console.log(SC2PATH);
        const sc2exe = SC2PATH || "C:/Program Files (x86)/Starcraft II/";
        this.sc2 = child_process_1.spawn("../Versions/Base56787/SC2_x64.exe", ["-listen", "127.0.0.1", "-port", "8190", "-displayMode", "0"], { cwd: sc2exe + "/Support64" });
        this.sc2.on('data', (data) => {
            console.log(data);
        });
        this.sc2.on('error', (error) => {
            console.error('Stacraft 2 error, ', error);
        });
        this.sc2.on('close', (code) => {
            console.log('Starcraft 2 closed with code, ' + code);
        });
    }
}
exports.SC2Node = SC2Node;
//# sourceMappingURL=index.js.map