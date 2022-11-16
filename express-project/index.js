const express = require('express')
const FriendRouter = require('./routes/friend.route')

const app = express()
const port = 3004

app.use('/api/friends', FriendRouter)

//middlewares
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.listen(port, () => {
    console.log(`app is runnig on port ${port}`)
})