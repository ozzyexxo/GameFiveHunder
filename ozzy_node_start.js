/*
 *  Created :Ozzy
 *  Date: 10 Jan 2019

 *  Description: Random scratchpad for node js
 *
 */

let sayhello = function() {
  console.log("Hello ozzy");
};
sayhello();

//console.log(module);

const ozzy_mod = require("./ozzy_mode_module");
//console.log(ozzy_mod);
//ozzy_mod.request_http('halloooo mod ozzy')
const path = require("path");
let pathon = path.parse(__filename);
//console.log(pathon);
const os = require("os");
let totmem = os.totalmem();
let freemem = os.freemem();
//console.log('Mem : ' + totmem);
//console.log(`Freemem : ${freemem}`);

const EvntEmtr = require("events");
const emtr = new EvntEmtr();

/* register an event listerner */
emtr.on("msglogged", arg => {
  console.log("Event caught " + "id is " + arg.id + " url is " + arg.url);
});

/* Rasie an event */
emtr.emit("msglogged", { id: 1, url: "http://" });

/* LEts see http */
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello from Ozzy");
    res.end();
  }
  if (req.url === "/ozzyweb") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.on("connection", socket => {
  console.log("new conn here");
});
server.listen(3000);
console.log("server on port 3000");
