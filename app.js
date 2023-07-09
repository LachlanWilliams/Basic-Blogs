const express = require('express'); // ejs files 
const morgan = require('morgan'); // middleware requests 
const mongoose = require('mongoose'); // mongoose for database
const Blog = require('./models/blog')


// express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://BasicBlogs-BasicUser:BeepBoop1001@cluster0.rfynja1.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine 
app.set('view engine', 'ejs');

// view engine will look in the pages folder
app.set('views', 'pages');

// middleware and static files 

app.use(express.static('public'))

app.use(morgan('tiny'));

app.get('/add-blog', (req,res) =>{
    const blog = new Blog({
        title: 'testTitle2',
        snippet: 'testSnippet',
        body: 'testBody'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get('/single-blog', (req, res) => {
    Blog.findById('64aa664df6c0026f782e9983')
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
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