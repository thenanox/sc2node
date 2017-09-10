import { spawn, ChildProcess } from "child_process";
import { env } from "process";

const SC2PATH = env['SC2PATH']; 

export class SC2Node {

    private sc2: ChildProcess;
    
    constructor(path?: string, args?: string[]){
        console.log(path, args);
        console.log(SC2PATH);
        const sc2exe = SC2PATH || "C:/Program Files (x86)/Starcraft II/" 
        this.sc2 = spawn("../Versions/Base56787/SC2_x64.exe", ["-listen", "127.0.0.1", "-port", "8190", "-displayMode", "0"], {cwd: sc2exe + "/Support64"});
        this.sc2.on('data', (data) => {
            console.log(data);
        })
        
        this.sc2.on('error', (error) => {
            console.error('Stacraft 2 error, ', error);
        })
        
        this.sc2.on('close', (code) => {
            console.log('Starcraft 2 closed with code, ' + code);
        });
    }
   
}
