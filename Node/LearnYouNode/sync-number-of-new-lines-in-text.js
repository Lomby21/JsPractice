var fs = require('fs');
//var contents = fs.readFileSync(process.argv[2]);
//var contentsString = contents.toString();
//console.log(contentsString);
//var lines = contentsString.split('\n');
//console.log(lines[0]);
//var numberOfNewLines = lines.length - 1;
var numberOfNewLines = fs.readFileSync(process.argv[2]).toString().split('\n').length -1;
console.log(numberOfNewLines);

