'use strict';

const shell = require('..');
const assert = require('assert').strict;

assert.strictEqual(shell(), 'Hello from shell');
console.info('shell tests passed');
