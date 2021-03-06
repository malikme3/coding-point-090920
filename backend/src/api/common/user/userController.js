
const express = require('express');
const router = express.Router();
const adminGuard = require('../auth/aclService').adminGuard;

const UserService = require('./userService');

const userService = new UserService();

router.get('/', adminGuard, (req, res) => {
  userService
    .list(req.query)
    .then(users => res.send(users));
});

router.get('/current', (req, res) => {
  userService
    .findById(req.user.id)
    .then(user => res.send(user));
});

router.put('/current', (req, res) => {
  userService
    .editUser(req.body)
    .then(user => res.send(user));
});

router.get('/:id', adminGuard, (req, res) => {
  userService
    .findById(req.params.id)
    .then(user => res.send(user));
});

router.delete('/:id', adminGuard, (req, res) => {
  userService
    .deleteUser(req.params.id)
    .then(() => res.send({ id: req.params.id }));
});

router.post('/', adminGuard, (req, res) => {
  userService
    .addUser(req.body)
    .then(user => res.send(user));
});

router.put('/:id', adminGuard, (req, res) => {
  userService
    .editUser(req.body)
    .then(user => res.send(user));
});

router.get('/:userId/photo', (req, res) => {
  userService
    .getPhoto(req.params.userId)
    .then(photo => {
      res.set('Content-Type', 'image/png');
      res.send(photo);
    });
});

module.exports = router;
