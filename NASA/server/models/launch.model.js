const launches = new Map()

let latestLaunch = 100

const launch = {
    flightNumber: 100,
    mission: "Kepler exploration",
    rocket: "Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    target: "Kelper-442 b",
    customers: ["ZTM", "NASA"],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch)

export const existLaunchWithId = launchId => {
    return launches.has(launchId)
}

export const allLaunches = () => {
    return Array.from(launches.values())
}

export const addNewLaunch = (launch) => {
    latestLaunch++
    launches.set(
        latestLaunch,
        Object.assign(
            launch, {
                success: true,
                upcoming: true,
                customers: ["ZTM", "NASA"],
                flightNumber: latestLaunch
            }
        )
    )
}

export const abortLaunch = (launchId) => {
    const abort = launches.get(launchId)
    abort.upcoming = false
    abort.success = false
    return abort
}

// export default launches