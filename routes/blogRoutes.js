const express = require('epxress');
const blogController = require('../controllers/blogcontroller');

const router = express.Router();

app.get('/', blogController.blog_index);

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

app.delete('/blogs/:id', (req,res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs'})
        })
        .catch(err => console.log(err))

})