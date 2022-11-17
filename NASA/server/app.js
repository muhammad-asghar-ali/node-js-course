import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import planetRoutes from './routes/planets.route.js'
import launchRoutes from './routes/launch.route.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan("dev"))

app.use('/api/planets', planetRoutes)
app.use('/api/launches', launchRoutes)

export default app