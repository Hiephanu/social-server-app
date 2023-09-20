const express = require('express');
const router = express.Router();
const homeController =require('../controllers/homeController.js')
const authController =require('../controllers/authController/authController.js')
const userController = require('../controllers/userController/userController.js')
const postController =require('../controllers/postController/postController.js')
const friendController = require('../controllers/friendController/friendController.js')
const homePageController = require('../controllers/homeController/homeController.js')
const likeController = require('../controllers/likeController/likeController.js')
const getImageController = require('../controllers/getImageController/getImageController.js')
const getPostImage = require('../controllers/getImageController/getPostImage.js')
const verifyToken = require('../middlewares/verifyToken.js')
const uploadedFile =require('../middlewares/uploadFile.js')
function initWebRoute(app) {
  app.get('/', homeController.getHomePage);
  app.get('/about', homeController.aboutPage);
  app.post('/register',authController.signup_post)
  app.post('/login',authController.signin)
  app.get('/get-user-by-id',userController.getUserById)
  app.post('/create-post',uploadedFile,postController.createdPost)
  app.delete('/delete-friend/:id',friendController.deleteFriend)
  app.post('/delete-post',verifyToken,postController.deletePost)
  app.get('/search-friend',friendController.searchFriend)
  app.post('/send-add-friend',friendController.sendAddFriend)
  app.post('/accept-friend',friendController.acceptFriend)
  app.post('/block-friend',friendController.blockFriend)
  app.get('/get-all-friend',friendController.getAllFriend)
  app.get('/get-block-friend',friendController.getBlockFriend)
  app.get('/get-wait-friend',friendController.getWaitFriend)
  app.get('/get-post-user',postController.getPostUser)
  app.post('/get-post-home/:id',homePageController.getPostHome)
  app.get('/avata/:id',getImageController)
  app.get('/postImage/:name',getPostImage)
  app.post('/create-like',likeController.createLike)
  app.get('/get-like-post/:id',likeController.getLikePost)
  app.delete('/delete-like',likeController.unLike)
}

module.exports = initWebRoute;