"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const process_1 = require("process");
const sc2api_1 = require("./protojs/sc2api");
const WebSocket = require('ws');
function WebSocketClient() {
    this.number = 0; // Message number
    this.autoReconnectInterval = 5 * 1000; // ms
}
WebSocketClient.prototype.open = function (url) {
    this.url = url;
    this.instance = new WebSocket(this.url);
    this.instance.on('open', () => {
        this.onopen();
    });
    this.instance.on('message', (data, flags) => {
        this.number++;
        this.onmessage(data, flags, this.number);
    });
    this.instance.on('close', (e) => {
        switch (e) {
            case 1000:// CLOSE_NORMAL
                console.log("WebSocket: closed");
                break;
            default:// Abnormal closure
                this.reconnect(e);
                break;
        }
        this.onclose(e);
    });
    this.instance.on('error', (e) => {
        switch (e.code) {
            case 'ECONNREFUSED':
                this.reconnect(e);
                break;
            default:
                this.onerror(e);
                break;
        }
    });
};
WebSocketClient.prototype.send = function (data, option) {
    try {
        this.instance.send(data, option);
    }
    catch (e) {
        this.instance.emit('error', e);
    }
};
WebSocketClient.prototype.reconnect = function (e) {
    console.log(`WebSocketClient: retry in ${this.autoReconnectInterval}ms`, e);
    var that = this;
    setTimeout(function () {
        console.log("WebSocketClient: reconnecting...");
        that.open(that.url);
    }, this.autoReconnectInterval);
};
WebSocketClient.prototype.onopen = function (e) { console.log("WebSocketClient: open", arguments); };
WebSocketClient.prototype.onmessage = function (data, flags, number) { console.log("WebSocketClient: message", arguments); };
WebSocketClient.prototype.onerror = function (e) { console.log("WebSocketClient: error", arguments); };
WebSocketClient.prototype.onclose = function (e) { console.log("WebSocketClient: closed", arguments); };
const sc2api = require("./messages/s2clientprotocol/sc2api_pb");
const SC2PATH = process_1.env["SC2PATH"];
const wsc = new WebSocketClient();
class SC2Node {
    launchSC2() {
        const sc2exe = SC2PATH || "C:/Program Files (x86)/Starcraft II/";
        this.sc2 = child_process_1.spawn("../Versions/Base56787/SC2_x64.exe", ["-listen", "127.0.0.1", "-port", "8190", "-displayMode", "0"], { cwd: sc2exe + "/Support64" });
        this.sc2.on("error", (error) => console.error("SC2 error, ", error));
        this.sc2.on("close", (code) => console.log("SC2 closed with code, " + code));
        this.sc2.on("exit", (exit) => console.log("SC2 exited because, ", exit));
    }
    connectWebsocket() {
        wsc.open("ws://127.0.0.1:8190/sc2api");
        wsc.onopen((e) => console.log("Websocket opened to SC2", e));
        wsc.onmessage((data) => {
            const bytes = Array.prototype.slice.call(data, 0);
            const resp = sc2api_1.SC2APIProtocol.Response.decode(bytes);
            console.log("wsdata", resp.toJSON());
        });
        wsc.onerror((error) => console.error("wserror", error));
    }
    requestPing() {
        const requestPing = new sc2api_1.SC2APIProtocol.Request({ ping: new sc2api_1.SC2APIProtocol.RequestPing() });
        wsc.send(sc2api_1.SC2APIProtocol.Request.encode(requestPing).finish());
    }
    createGame() {
        const requestCreate = new sc2api_1.SC2APIProtocol.Request({
            createGame: new sc2api_1.SC2APIProtocol.RequestCreateGame({
                localMap: new sc2api_1.SC2APIProtocol.LocalMap({ mapPath: "Melee/Simple64.SC2Map" }),
                playerSetup: [
                    new sc2api_1.SC2APIProtocol.PlayerSetup({
                        type: sc2api_1.SC2APIProtocol.PlayerType.Participant
                    }),
                    new sc2api_1.SC2APIProtocol.PlayerSetup({
                        type: sc2api_1.SC2APIProtocol.PlayerType.Computer,
                        difficulty: sc2api_1.SC2APIProtocol.Difficulty.VeryEasy,
                        race: sc2api_1.SC2APIProtocol.Race.Zerg
                    })
                ],
                realtime: true
            })
        });
        this.ws.send(sc2api_1.SC2APIProtocol.Request.encode(requestCreate).finish());
    }
    joinGame() {
        const requestJoin = new sc2api_1.SC2APIProtocol.Request({
            joinGame: new sc2api_1.SC2APIProtocol.RequestJoinGame({
                race: sc2api_1.SC2APIProtocol.Race.Terran,
                options: new sc2api_1.SC2APIProtocol.InterfaceOptions({
                    score: true,
                    featureLayer: new sc2api_1.SC2APIProtocol.SpatialCameraSetup({
                        width: 24,
                        resolution: new sc2api_1.SC2APIProtocol.Size2DI({ x: 84, y: 84 }),
                        minimapResolution: new sc2api_1.SC2APIProtocol.Size2DI({ x: 64, y: 64 })
                    })
                })
            })
        });
        this.ws.send(sc2api_1.SC2APIProtocol.Request.encode(requestJoin).finish());
    }
    observation() {
        const requestObservation = new sc2api_1.SC2APIProtocol.Request({ observation: new sc2api_1.SC2APIProtocol.RequestObservation() });
        this.ws.send(sc2api_1.SC2APIProtocol.Request.encode(requestObservation).finish());
    }
}
exports.SC2Node = SC2Node;
//# sourceMappingURL=index.js.map