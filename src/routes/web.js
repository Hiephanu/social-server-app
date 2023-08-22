const express = require('express');
const router = express.Router();
const homeController =require('../controllers/homeController.js')
const authController =require('../controllers/authController/authController.js')
const postController =require('../controllers/postController/postController.js')
const friendController = require('../controllers/friendController/friendController.js')
const verifyToken = require('../middlewares/verifyToken.js')
const uploadedFile =require('../middlewares/uploadFile.js')
function initWebRoute(app) {
  app.get('/', homeController.getHomePage);
  app.get('/about', homeController.aboutPage);
  app.post('/register',authController.signup_post)
  app.post('/login',authController.signin);
  app.post('/create-post',verifyToken,uploadedFile,postController.createdPost)
  app.post('/delete-post',verifyToken,postController.deletePost)
  app.post('/search-friend',friendController.searchFriend)
  app.post('/send-add-friend',friendController.sendAddFriend)
  app.post('/accept-friend',friendController.acceptFriend)
  app.post('/block-friend',friendController.blockFriend)
  app.get('/get-post-user',postController.getPostUser)
}

module.exports = initWebRoute;