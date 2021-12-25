const zlib = require('zlib');

const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('input.pdf');
const out = fs.createWriteStream('output.gz');

inp.pipe(gzip).pipe(out);