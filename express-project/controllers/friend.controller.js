const friends = [{
        id: 0,
        name: "test"
    },
    {
        id: 1,
        name: "test1"
    },
    {
        id: 2,
        name: "test2"
    }
]

module.exports.allFriends = (req, res) => {
    res.status(200).json(friends)
}

module.exports.createFriend = (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            mesg: "missing name  "
        })
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }
    friends.push(newFriend)

    res.status(201).json(newFriend)
}

module.exports.friendById = (req, res) => {
    const id = Number(req.params.id)
    console.log(typeof id)
    const friend = friends[id]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({ mesg: "friend not found" })
    }
}