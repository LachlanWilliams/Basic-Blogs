const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link ref="styleseet" href="#"></head>');
    res.write('<p>Node js server lets goooo </p>');
    res.write('<p> second line</p>');
    //res.write('<p>%d</p>',req.url);
    res.end();


});

server.listen(3000, 'localhost', () => {
    console.log("listening for requests on port 3000")
});
