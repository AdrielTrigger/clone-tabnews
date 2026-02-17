console.log("closing docker container...");
const { spawn } = require("child_process");

spawn("npm", ["run", "services:stop"], {
  stdio: "inherit",
  shell: true,
});
