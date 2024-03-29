'use strict';

const remote1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(remote1(), 'Hello from remote1');
console.info('remote1 tests passed');
