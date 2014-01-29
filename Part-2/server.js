var http = require('http'),
		url  = require('url');

// Hour 5.1
// http.createServer(function(req, res){
// 	res.writeHead(200, {
// 		'Content-Type': 'text/plain'
// 	});
// 	res.end('Hello Squirreled\n');
// }).listen(3000, "127.0.0.1");
// console.log("Server running at http://localhost:3000");

// Hour 5.3
// http.createServer(function(req, res){
// 	res.writeHead(301, {
// 		'location': 'http://www.nbcsports.com/'
// 	});
// 	res.end();
// }).listen(3000, "127.0.0.1");
// console.log("Server running at localhost:3000");

// Hour 5.4
// http.createServer(function(req, res) {
// 	var pathname = url.parse(req.url).pathname;

// 	if (pathname === '/'){
// 		res.writeHead(200, {
// 			"Content-Type": "text/plain"
// 		});
// 		res.end('Home Page\n');
// 	} else if (pathname === '/about') {
// 		res.writeHead(200, {
// 			"Content-Type": "text/plain"
// 		});
// 		res.end('About Us\n');
// 	} else if ( pathname === '/redirect') {
// 		res.writeHead(301, {
// 			'Location': '/'
// 		});
// 		res.end();
// 	} else {
// 		res.writeHead(404, {
// 			'Content-Type': 'text/plain'
// 		});
// 		res.end('Page not found\n')
// 	}

// }).listen(3000, "127.0.0.1");
//console.log("Server running at localhost:3000");

// Hour 5.5
var options = { 
	host: 'shapeshed.com',
	port: 80,
	path: '/'
};

http.get(options, function(res){
	if (res.statusCode == 200) {
		console.log("The site is up");
	}
	else {
		console.log("The site is down");
	}
}).on('error', function(e){
	console.log("There was and error: " + e.message);
});









