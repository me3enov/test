import { encoded, translations } from './data.js';
import { decodeFields } from './decoder.js';

console.log("Let's rock");

const result = decodeFields(encoded, translations);
console.log(result.decoded);
console.log(result.uniqueIds);
