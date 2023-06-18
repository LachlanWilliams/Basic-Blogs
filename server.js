const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    //req = request, res = response 
    console.log(req.url, req.method);

    // This sets the header content type 
    res.setHeader('Content-Type', 'text/html');

    // send an html file 
    // fs (file system) creates a stream
    fs.readFile('./pages/index.html', (err, data) => {
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
