const spawn = require('child_process');

spawn.spawn("../Versions/Base56787/SC2_x64.exe", ["-listen", "127.0.0.1", "-port", "8190", "-displayMode", "0"], {cwd:"D:/Battlenet/StarCraft II/Support64"}, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})