const Transform = require('stream').Transform;
const csv = require('csv-streamify');
const JSONStream = require('JSONStream');

const csvToJson = csv({ objectMode: true });

let parser = new Transform({ objectMode: true });

parser._rawHeader = [];
parser._transform = function(data, encoding, done) {
  this._rawHeader.push(data);
  this.push({ row: data });
  done();
};

let jsonToStrings = JSONStream.stringify(false);

// Pipes the stream
process.stdin
  .pipe(csvToJson)
  .pipe(parser)
  .pipe(jsonToStrings)
  .pipe(process.stdout);

// Send an error on stdout
process.stdout.on('error', process.exit);
