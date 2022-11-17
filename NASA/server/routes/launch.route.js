import express from "express"
import { httpAbortLaunch, addNewLaunchHttp, getAllLaunches } from "../controllers/launch.controller.js"

const router = express.Router()

router.get('/', getAllLaunches)
router.post('/', addNewLaunchHttp)
router.delete('/:id', httpAbortLaunch)


export default router