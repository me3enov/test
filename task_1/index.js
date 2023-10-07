import { encoded, translations } from './data.js';
import { decodeObjects } from './decoder.js';

console.log("Let's rock");

const result = decodeObjects(encoded, translations);
console.log(result.decoded);
console.log(result.uniqueIds);
