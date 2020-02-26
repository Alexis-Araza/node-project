//core modules
const http = require('http'); // provides server

const server = http.createServer((req,res)=>{

	res.write("Hello!");
	res.end();

});

server.listen(3000);
console.log("running node server at port 3000");