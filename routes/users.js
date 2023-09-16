const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { validateUserBio } = require('../utils/validation');

router.get('/me', getUser);
router.patch('/me', validateUserBio, updateUser);

module.exports = router;
