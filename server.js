/*
This is being used anymore 
However I just want to keep it
so I may look back on it from when 
I first learnt node 
*/

const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req,res) => {

    // lodash 
    const num = _.random(0,100);
    console.log(num)

    // This sets the header content type 
    res.setHeader('Content-Type', 'text/html');

    let path = './pages/'

    // add any switch cases for each html file
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
            
    }

    // send an html file 
    // fs (file system) creates a stream
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            // you can also just use this 
            // res.end(data);
        }
        res.end();
    });

});

server.listen(3000, 'localhost', () => {
    console.log("listening for requests on port 3000")
});
