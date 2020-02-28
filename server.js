//core modules
const http = require('http'); // provides server
const fs = require('fs'); // provides readfile, use for file transaction
const path = require('path'); // defining the path
const qs = require('querystring'); // stores data from a user temporarily

const server = http.createServer((req,res)=>{ //server start
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


		else if (req.url.match ('/node_modules/')){
			const nodePath = path.join(__dirname,req.url);
			fs.readFile(nodePath, 'UTF-8', (err,data)=>{ 
				if (err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/css'});
				res.end(data);
			})
		} // else node_modules


		else if (req.url.match ('/css/')){
			const cssPath = path.join(__dirname,'public',req.url);
			fs.readFile(cssPath, 'UTF-8', (err,data)=>{ 
				if (err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/css'});
				res.end(data);
			})
		} // else css 


		else if (req.url.match ('/js/')){
			const jsPath = path.join(__dirname,'public',req.url);
			fs.readFile(jsPath, 'UTF-8', (err,data)=>{ 
				if (err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/js'});
				res.end(data);
			})
		} // else js 


		else if (req.url.match (/.jpeg/)){
			const imgPath = path.join(__dirname,'public',req.url);
			fs.readFile(imgPath, (err,data)=>{ 
				if (err) throw err;
				res.writeHead(200, {'Content-Type' : 'image/jpeg'});
				res.end(data);
			})
		} // else image


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


		else if (req.url === '/contact.html'){
			fs.readFile('./public/contact.html', 'UTF-8', (err,data)=>{ 
				if (err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			})
		} // else contact


	} // get method


	else if (req.method === 'POST'){

		if (req.url === '/sendForm') {
			// console.log("form");
			let body = '';

			req.on('data', function(data){
				body += data; // body = body + data
			});

			req.on('end', function(){
				console.log('form data ends');
				console.log(body.toString());
				const formData = qs.parse(body.toString());
				console.log(formData);

			})
		}
	} // post method

}); //server end

server.listen(3000);
console.log("running node server at port 3000");