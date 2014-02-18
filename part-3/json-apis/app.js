var http = require('http');

var stevieg = { name: "Steven Gerrard", nickname: "Captain Fantastic" }

http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'application/json'} );
	res.end(JSON.stringify(stevieg));
}).listen(3000)

console.log("Server running on localhost:3000");


console.log('Javascript Object');
console.log(stevieg);

var stevieJSON = JSON.stringify(stevieg);
console.log('Javascript to JSON object');
console.log(stevieJSON);

var stevieObj = JSON.parse(stevieJSON);
console.log('JSON to Javascript object');
console.log(stevieObj);