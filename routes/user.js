const express = require('express');
const router = express.Router();
console.log("user router loaded");
const userController = require('../controllers/user_controller');
router.get('/signIn',userController.signIn);
console.log('inside user router');
router.get('/signUp',userController.signUp);
router.post('/createUser',userController.createUser);
router.post('/getUser',userController.getUser);








module.exports = router;