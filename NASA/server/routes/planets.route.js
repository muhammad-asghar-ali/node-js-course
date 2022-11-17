import express from "express"
import { getAllPlanets } from "../controllers/planet.controller.js"

const router = express.Router()

router.get('/', getAllPlanets)

export default router