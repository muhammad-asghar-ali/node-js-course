const express = require('express')
const { allFriends, createFriend, friendById } = require('../controllers/friend.controller')

const router = express.Router()

router.get('/friends', allFriends)

router.get('/friends/:id', friendById)

router.post('/freinds', createFriend)

module.exports.router