const express = require('express');

// express app
const app = express();

// register view engine 
app.set('view engine', 'ejs');

// view engine will look in the pages folder
app.set('views', 'pages');

// listen for requests
app.listen(3000);

app.use((req,res, next) => {
    console.log('New request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    console.log('\n')
    next();

});

// takes user to main page 
app.get('/', (req,res) => {


    const blogs = [
        {title: 'Autumn leaves', snippet: "are yellow and brown"},
        {title: 'Summer leaves', snippet: "are green and yellow"},
        {title: 'Winter leaves', snippet: "are all gone"},
        {title: 'Spring leaves', snippet: "are bountiful and green"},
    ]


    //res.send('<p>home page</p>');
    //res.sendFile('./pages/index.html', {root: __dirname});
    res.render('index', {title: 'Home', blogs});
});

// takes user to about page
app.get('/about', (req,res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./pages/about.html', {root: __dirname});
    res.render('about', {title: 'About'})
});

app.get('/blogs/create', (req,res) =>{
    res.render('create', {title: 'Create'})
});

// redirect function
app.get('/about-me', (req,res) => {
    res.render('about')
});

// 404 page 
// this stays at the bottom bc it will only run if all the other functions miss 
app.use((req,res) =>{
    //res.status(404).sendFile('./pages/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'})
});