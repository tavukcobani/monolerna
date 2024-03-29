'use strict';

const remote2 = require('..');
const assert = require('assert').strict;

assert.strictEqual(remote2(), 'Hello from remote2');
console.info('remote2 tests passed');
