import { spawn, ChildProcess } from "child_process";
import { env } from "process";
import { exists } from "fs";
import { SC2APIProtocol } from "./protojs/sc2api";
import { WebSocketClient } from "./libs/WebSocketClient";

const sc2api = require("./messages/s2clientprotocol/sc2api_pb");
const SC2PATH = env["SC2PATH"]; 

const wsc = new WebSocketClient();

export class SC2Node {

    private sc2: ChildProcess;
    private ws;

    launchSC2() {
        const sc2exe = SC2PATH || "C:/Program Files (x86)/Starcraft II/"

        this.sc2 = spawn("../Versions/Base56787/SC2_x64.exe", ["-listen", "127.0.0.1", "-port", "8190", "-displayMode", "0"], {cwd: sc2exe + "/Support64"});
        
        this.sc2.on("error", (error) => console.error("SC2 error, ", error));
        this.sc2.on("close", (code) => console.log("SC2 closed with code, " + code));
        this.sc2.on("exit", (exit) => console.log("SC2 exited because, ", exit));

        wsc.open("ws://127.0.0.1:8190/sc2api");

        wsc.onopen((e) => console.log("Websocket opened to SC2", e));
        wsc.onmessage((data) => {
            const bytes = Array.prototype.slice.call(data, 0);
            const resp = SC2APIProtocol.Response.decode(bytes);
            console.log("wsdata", resp.toJSON());
        });
        wsc.onerror((error) => console.error("wserror", error));
    }

    requestPing() {
        const requestPing: SC2APIProtocol.Request = new SC2APIProtocol.Request({ping:new SC2APIProtocol.RequestPing()});
        wsc.send(SC2APIProtocol.Request.encode(requestPing).finish());
    }

    createGame() {
        const requestCreate: SC2APIProtocol.Request = new SC2APIProtocol.Request({
            createGame: new SC2APIProtocol.RequestCreateGame({
                localMap: new SC2APIProtocol.LocalMap({mapPath:"Melee/Simple64.SC2Map"}),
                playerSetup: [
                    new SC2APIProtocol.PlayerSetup({
                        type: SC2APIProtocol.PlayerType.Participant
                    }),
                    new SC2APIProtocol.PlayerSetup({
                        type: SC2APIProtocol.PlayerType.Computer,
                        difficulty: SC2APIProtocol.Difficulty.VeryEasy,
                        race: SC2APIProtocol.Race.Zerg
                    })
                ],
                realtime: true
            })
        });
        this.ws.send(SC2APIProtocol.Request.encode(requestCreate).finish());
    }

    joinGame() {
        const requestJoin: SC2APIProtocol.Request = new SC2APIProtocol.Request({
            joinGame: new SC2APIProtocol.RequestJoinGame({
                race: SC2APIProtocol.Race.Terran,
                options: new SC2APIProtocol.InterfaceOptions({
                    score: true,
                    featureLayer: new SC2APIProtocol.SpatialCameraSetup({
                        width: 24,
                        resolution: new SC2APIProtocol.Size2DI({x: 84, y: 84}),
                        minimapResolution: new SC2APIProtocol.Size2DI({x: 64, y: 64})
                    })
                })
            })
        });
        this.ws.send(SC2APIProtocol.Request.encode(requestJoin).finish());
    }

    observation() {
        const requestObservation: SC2APIProtocol.Request = new SC2APIProtocol.Request({observation: new SC2APIProtocol.RequestObservation()});
        this.ws.send(SC2APIProtocol.Request.encode(requestObservation).finish());
    }
   
}
