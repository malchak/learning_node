var express = require('express');

var app = module.exports = express.createServer();

var rebels = [
	{ name: "Han Solo" },
	{ name: "Luke Skywalker"},
	{ name: "Chewbacca"}
];

app.get('/', function(req, res, next){
	res.send(rebels);
});

app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.listen(3000);

console.log("Express server running on port %d in %s mode", app.address().port, app.settings.env);