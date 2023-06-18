const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// takes user to main page 
app.get('/', (req,res) => {
    //res.send('<p>home page</p>');
    res.sendFile('./pages/index.html', {root: __dirname});
});

// takes user to about page
app.get('/about', (req,res) => {
    //res.send('<p>about page</p>');
    res.sendFile('./pages/about.html', {root: __dirname});
});

// redirect function
app.get('/about-me', (req,res) => {
    res.redirect('/about');
});

// 404 page 
app.use((res,req) =>{
    res.sendFile('./pages/404.html', {root: __dirname});
});