import { addNewLaunch, allLaunches, existLaunchWithId, abortLaunch } from "../models/launch.model.js"

export const getAllLaunches = async(req, res) => {
    try {
        res.status(200).json(allLaunches())
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

export const addNewLaunchHttp = async(req, res) => {
    try {
        const launch = req.body

        if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
            return res.status(400).json({
                error: "missing required launch property"
            })
        }

        launch.launchDate = new Date(launch.launchDate)

        if (!isNaN(launch.launch)) {
            return res.status(400).json({
                error: "invalid launch date"
            })
        }
        res.status(201).json(addNewLaunch(launch))
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

export const httpAbortLaunch = async(req, res) => {
    try {
        const launchId = Number(req.params.id)

        if (!existLaunchWithId(launchId)) {
            return res.status(404).json({
                error: "launch not found"
            })
        }

        const aborted = abortLaunch(launchId)
        res.status(200).json(aborted)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}