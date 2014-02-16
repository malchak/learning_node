var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	fs.readFile('./index.html', function(error, data){
		res.writeHead(200, { 'Content-Type': 'text/html'} );
		res.end(data, 'utf-8');
	});
}).listen(3000, "127.0.0.1");
console.log('Server running on port localhost:3000');

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	socket.on('message', function(data){
		socket.broadcast.emit('push message', data);
	});
});