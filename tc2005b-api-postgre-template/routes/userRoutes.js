const express = require('express');
const router = express.Router();

const { createUser } = require('../controllers/userController'); 
// { createUser,loginUser }
router.post('/register', createUser);
// router.post('/login', loginUser);

module.exports = router;