const { Router } = require('express');
const {
  getUsers,
  createNewUser,
  getUserById,
  deleteUserById,
} = require('../controllers/users.controller');

const router = Router();

router.post('/users', createNewUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUserById);

module.exports = router;
