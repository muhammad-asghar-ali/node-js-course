const http = require('http')

const port = 3000

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

const server = http.createServer((req, res) => {
    const items = req.url.split('/')
    if (req.method === "POST" && items[1] === 'friends') {
        req.on('data', data => {
            // data received as a json but get as a buffer and convert to string and at last convert to JS object
            const friend = data.toString()
            console.log("Request: ", friend)
            friends.push(JSON.parse(friend))
        })
        req.pipe(res)

    } else if (req.method === "GET" && items[1] === 'friends') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        if (items.length === 3) {
            const friendIndex = Number(items[2])
            res.end(JSON.stringify(friends[friendIndex]))
        } else {
            res.end(JSON.stringify(friends))
        }
    } else if (req.url === '/messages') {
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>message 1</li>')
        res.write('<li>message 2</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    } else {
        res.statusCode = 404
        res.end()
    }
})

server.listen(port, () => [
    console.log(`server is running on port ${port}`)
])