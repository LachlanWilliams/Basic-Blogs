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
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

// takes user to main page 
app.get('/', (req,res) => {
    res.redirect('/blogs');
});

app.get('/blogs', (req,res) => {
    Blog.find().sort({createdAt: -1})
    .then(result => {
      res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch(err => {
      console.log(err);
    });

});

app.post('/blogs', (req,res) => {
    const blog = new Blog(req.body);

    blog.save()
    .then(result => {
        res.redirect('/blogs')
      })
      .catch(err => {
        console.log(err);
      });
});

// takes user to the create forum
app.get('/blogs/create', (req,res) =>{
    res.render('create', {title: 'Create'})
});

app.get('/blogs/:id', (req,res) =>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details', {title: 'Blog Details', blog: result})
      })
      .catch(err => {
        console.log(err);
      });
});

// takes user to about page
app.get('/about', (req,res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./pages/about.html', {root: __dirname});
    res.render('about', {title: 'About'})
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