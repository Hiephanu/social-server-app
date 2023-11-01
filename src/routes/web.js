const express = require('express');
const homeController =require('../controllers/homeController.js')
const searchController = require('../controllers/searchController/searchController.js')
const authController =require('../controllers/authController/authController.js')
const userController = require('../controllers/userController/userController.js')
const postController =require('../controllers/postController/postController.js')
const friendController = require('../controllers/friendController/friendController.js')
const homePageController = require('../controllers/homeController/homeController.js')
const likeController = require('../controllers/likeController/likeController.js')
const commentController =require('../controllers/commentController/commentController.js')
const saveController = require('../controllers/saveController/saveController.js')
const getImageController = require('../controllers/getImageController/getImageController.js')
const getPostImage = require('../controllers/getImageController/getPostImage.js')
const verifyToken = require('../middlewares/verifyToken.js')
const uploadedFile =require('../middlewares/uploadFile.js');
const uploadFileAvata = require('../middlewares/uploadFileAvata.js');
function initWebRoute(router) {
  router.get('/', homeController.getHomePage);
  router.get('/about', homeController.aboutPage);
  router.post('/register',authController.signup_post)
  router.post('/login',authController.signin)
  router.get('/get-user-by-id/:id',userController.getUserById)
  router.post('/create-post',uploadedFile,postController.createdPost)
  router.delete('/delete-friend/:id',friendController.deleteFriend)
  router.post('/delete-post',postController.deletePost)
  router.get('/search-friend',friendController.searchFriend)
  router.post('/send-add-friend',friendController.sendAddFriend)
  router.post('/accept-friend',friendController.acceptFriend)
  router.post('/block-friend',friendController.blockFriend)
  router.get('/get-all-friend',friendController.getAllFriend)
  router.get('/get-block-friend',friendController.getBlockFriend)
  router.get('/get-wait-friend',friendController.getWaitFriend)
  router.get('/get-post-user',postController.getPostUser)
  router.post('/get-post-home/:id',homePageController.getPostHome)
  router.post('/search',searchController.homeSearch)
  router.get('/avata/:id',getImageController)
  router.get('/postImage/:name',getPostImage)
  router.post('/create-like',likeController.createLike)
  router.get('/get-like-post/:id',likeController.getLikePost)
  router.delete('/delete-like',likeController.unLike)
  router.get('/get-comment/:postId',commentController.getComment)
  router.post('/create-comment',commentController.createdComment)
  router.post('/create-save',saveController.createSave)
  router.get('/get-save-post/:id',saveController.getSavePost)
  router.put('/user/update-avata',uploadFileAvata,userController.updateAvata)
}

module.exports = initWebRoute;