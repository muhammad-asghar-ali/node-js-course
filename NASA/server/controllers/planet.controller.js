import planets from "../models/planets.model.js"

export const getAllPlanets = async(req, res) => {
    try {
        res.status(200).json(planets)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}