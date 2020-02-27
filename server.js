//core modules
const http = require('http'); // provides server
const fs = require('fs'); // provides readfile, use for file transaction
const path = require('path'); // defining the path


const server = http.createServer((req,res)=>{
	// res.writeHead(200,{'Content-Type' : 'text/plain'}) // request status checker

	// res.write("Hello!");
	// res.end();

	console.log(`${req.method} request for ${req.url} `);

	if (req.method === 'GET'){
		if (req.url === '/'){ // for landing page
			fs.readFile('./public/index.html', 'UTF-8', (err,data)=>{ //(root/folder/file), universal lang
				if (err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			})
		} 

		else if (req.url === '/index.html'){ // when linking to another page, rename
			fs.readFile('./public/index.html', 'UTF-8', (err,data)=>{ 
				if (err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			})
		} // else index

		else if (req.url === '/about.html'){
			fs.readFile('./public/about.html', 'UTF-8', (err,data)=>{ 
				if (err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			})
		} // else about

	} // method

});

server.listen(3000);
console.log("running node server at port 3000");