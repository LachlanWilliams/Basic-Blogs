const Blog = require('../models/blog');

const blog_index = (req,res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) =>{
        result.render('index', {title: 'All bogs', blogs: result})
    })
    .catch((err) => {
        console.log(err)
    });
}

const blog_details = (res,req) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details', {title: 'Blog Details', blog: result})
      })
      .catch(err => {
        console.log(err);
      });
}

module.exports = {
    blog_index,
    blog_details
}