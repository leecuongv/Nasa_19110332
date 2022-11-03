const launches = new Map();

let latestFlightNumber = 100;

function existsLaunchWithId(launchId){
    return launches.has(launchId)
}

const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: 'Explorer IS1',
    launchDate: new Date('November 03, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        success: true,
        upcoming: true,
        customer: ['Zero to Mastery', 'NASA'],
        flightNumber: latestFlightNumber,
    }));

}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId)
    aborted.upcoming = false
    aborted.success = false
    return aborted
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}