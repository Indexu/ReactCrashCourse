// This is without Babel, only Node.js. That is why the extensions are .mjs
// Need to run node with the flag --experimental-modules

import * as constants from './constants';
import { foo, bar } from './constants';

// import constants from './constants';

console.log(constants.foo);
console.log(constants.bar);

console.log(foo);
console.log(bar);
