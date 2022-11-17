import http from 'http'
import dotenv from 'dotenv'
import app from './app.js'
import { loadPlanetData } from './models/planets.model.js'
dotenv.config()

const server = http.createServer(app)

await loadPlanetData()

const port = process.env.PORT || 8000
server.listen(port, () => {
    console.log(`app is running on port ${port}`)
})