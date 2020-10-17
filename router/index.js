// homepage, single blog, blogs, contact us, about us, subscribe by category
const router = require('express').Router()
const { notLoggedIn } = require('../controllers/adminController')
const { hompage, viewSingleBlogPost, viewPostsByCategory, searchPosts, contactForm, } = require('../controllers/indexController')

router.get('/', hompage)

router.get('/blog/:id', viewSingleBlogPost)

router.get('/category/:id', viewPostsByCategory)

router.post('/search', searchPosts)

router.post('/contact-form', contactForm)

module.exports = router