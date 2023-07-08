const express = require('express');

// express app
const app = express();

// register view engine 
app.set('view engine', 'ejs');

// view engine will look in the pages folder
app.set('views', 'pages');

// listen for requests
app.listen(3000);

// takes user to main page 
app.get('/', (req,res) => {
    //res.send('<p>home page</p>');
    //res.sendFile('./pages/index.html', {root: __dirname});
    res.render('index');
});

// takes user to about page
app.get('/about', (req,res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./pages/about.html', {root: __dirname});
    res.render('about')
});

app.get('/blogs/create', (req,res) =>{
    res.render('create')
});

// redirect function
app.get('/about-me', (req,res) => {
    res.render('about')
});

// 404 page 
// this stays at the bottom bc it will only run if all the other functions miss 
app.use((req,res) =>{
    //res.status(404).sendFile('./pages/404.html', {root: __dirname});
    res.status(404).render('404')
});