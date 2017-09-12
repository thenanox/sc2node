import { spawn, ChildProcess } from "child_process";
import { env } from "process";
import * as websocket from "ws";

const sc2api = require("./messages/s2clientprotocol/sc2api_pb");
const SC2PATH = env["SC2PATH"]; 

export class SC2Node {

    private sc2: ChildProcess;
    private ws: websocket;

    launchSC2() {
        const sc2exe = SC2PATH || "C:/Program Files (x86)/Starcraft II/" 
        this.sc2 = spawn("../Versions/Base56787/SC2_x64.exe", ["-listen", "127.0.0.1", "-port", "8190", "-displayMode", "0"], {cwd: sc2exe + "/Support64"});
        
        this.sc2.on("error", (error) => console.error("SC2 error, ", error));
        this.sc2.on("close", (code) => console.log("SC2 closed with code, " + code));
        this.sc2.on("exit", (exit) => console.log("SC2 exited because, ", exit));
    }

    connectWebsocket() {
        this.ws = new websocket("ws://127.0.0.1:8190/sc2api");

        this.ws.on("open", () => console.log("Websocket opened to SC2"));
        this.ws.on("message", (data) => {
            const bytes = Array.prototype.slice.call(data, 0)
            const resp = sc2api.Response.deserializeBinary(bytes);
            console.log("wsdata", resp.toObject())
        });
        this.ws.on("error", (error) => console.error("wserror", error));
    }

    requestPing() {
        const request = new sc2api.Request();
        request.setPing(new sc2api.RequestPing());
        this.ws.send(request.serializeBinary());       
    }

    createGame() {
        const request = new sc2api.Request();
        const req = new sc2api.RequestCreateGame();
        const p1 = new sc2api.PlayerSetup();
        p1.setType(sc2api.PlayerType.PARTICIPANT);
        const p2 = new sc2api.PlayerSetup();
        p2.setType(sc2api.PlayerType.COMPUTER);
        p2.setRace(sc2api.Race.ZERG);   
        p2.setDifficulty(sc2api.Difficulty.VERYEASY);
        req.addPlayerSetup(p1);
        req.addPlayerSetup(p2);
        const localMap = new sc2api.LocalMap();
        localMap.setMapPath("Melee/Simple64.SC2Map");
        req.setLocalMap(localMap);
        req.setRealtime(true);
        request.setCreateGame(req);
        this.ws.send(request.serializeBinary());
    }

    joinGame() {
        const request = new sc2api.Request();
        const req = new sc2api.RequestJoinGame();
        req.setRace(sc2api.Race.TERRAN);
        const interfaceOptions = new sc2api.InterfaceOptions();
        interfaceOptions.setScore(true);
        const camera = new sc2api.SpatialCameraSetup();
        camera.setWidth(24);
        const resolution = new sc2api.Size2DI();
        resolution.setX(84);
        resolution.setY(84)
        camera.setResolution(resolution);
        const minimap = new sc2api.Size2DI();
        minimap.setX(64);
        minimap.setY(64);
        camera.setMinimapResolution(minimap);
        interfaceOptions.setFeatureLayer(camera);
        req.setOptions(interfaceOptions);
        request.setJoinGame(req);
        console.log(request.toObject());
        this.ws.send(request.serializeBinary());
    }
   
}
