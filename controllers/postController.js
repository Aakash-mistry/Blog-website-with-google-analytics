const Category = require('../models/category')
const Blog = require('../models/post')

exports.createPostForm = async(req, res) => {
    const categories = await Category.find().sort({ createdAt: -1 })
    res.render('blog/create-blog', {
        title: 'sachintechtalks | create new blog',
        categoriesLength: categories.length,
        categories,
        user: req.user
    })
}

// backend of blogs
exports.createNewBlog = async(req, res) => {
    const formData = new Blog({
        postTitle: req.body.title,
        shortDescription: req.body.short_title,
        category: req.body.category,
        postImage: req.body.photo,
        mainDescription: req.body.description
    })
    formData.save((err, data) => {
        if (err) {
            res.json(err)
        } else {
            console.log(data)
            res.redirect('/admin/view-blog-admin')
        }
    })
}


exports.deleteOneBlog = async(req, res) => {
    await Blog.findOneAndDelete({ _id: req.params.blogId })
    res.redirect('/admin/view-blog-admin')
}