const API_URL = 'http://localhost:8000'
    // Load planets and return as JSON.
async function httpGetPlanets() {
    const response = await fetch(`${API_URL}/api/planets`)
    return await response.json()
}

async function httpGetLaunches() {
    // Load launches, sort by flight number, and return as JSON.
    const response = await fetch(`${API_URL}/api/launches`)
    const fetchLaunches = await response.json()
    return fetchLaunches.sort((a, b) => {
        return a.flightNumber - b.flightNumber
    })
}

async function httpSubmitLaunch(launch) {
    // Submit given launch data to launch system.
    try {
        return await fetch(`${API_URL}/api/launches`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(launch)
        })
    } catch (err) {
        return {
            ok: false
        }
    }
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
    try {
        return await fetch(`${API_URL}/api/launches/${id}`, {
            method: "delete",
        })
    } catch (err) {
        return {
            ok: false
        }
    }
}

export {
    httpGetPlanets,
    httpGetLaunches,
    httpSubmitLaunch,
    httpAbortLaunch,
};