#!/usr/bin/env node

const SC2Node = require('../dist/index.js').SC2Node;
const result = new SC2Node();
result.connectWebsocket();
setTimeout(function() {
    result.createGame();
}, 1000);
