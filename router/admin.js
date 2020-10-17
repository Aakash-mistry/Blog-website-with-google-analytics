const { loginForm, passportLogin, dashboard, logout, isLoggedIn, notLoggedIn, viewBlogsToAdmin, viewAccountDetails } = require('../controllers/adminController')
const { createCategoryForm, createCategory, viewAllCategory, editCategoryForm, editCategory, deleteCategory } = require('../controllers/categoryController')
const { createPostForm, createNewBlog, deleteOneBlog } = require('../controllers/postController')
const router = require('express').Router()

// GET
router.get('/', loginForm)
router.get('/dashboard', isLoggedIn, dashboard)
router.get('/logout', isLoggedIn, logout)
router.get('/view-blog-admin', isLoggedIn, viewBlogsToAdmin)

// CATEGORIES
router.get('/create-category', isLoggedIn, createCategoryForm)
router.get('/view-category', isLoggedIn, viewAllCategory)
router.get('/edit-category/:id', isLoggedIn, editCategoryForm)

// BLOGS
router.get('/create-blog', isLoggedIn, createPostForm)

// ADMIN ACCOUNT
router.get('/account-settings', isLoggedIn, viewAccountDetails)

// POST routes
router.post('/', passportLogin)

// CATEGORIES
router.post('/create-category', isLoggedIn, createCategory)
router.post('/edit-category/:id', isLoggedIn, editCategory)
router.post('/delete-category/:id', isLoggedIn, deleteCategory)

// BLOGS
router.post('/create-new-blog', isLoggedIn, createNewBlog)
router.post('/delete-blog/:blogId', isLoggedIn, deleteOneBlog)

module.exports = router