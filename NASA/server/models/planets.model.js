// const planets = [{
//     id: 1,
//     name: "earth"
// }]

// export default planets

import { parse } from 'csv-parse'
import fs from 'fs';

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' &&
        planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 &&
        planet['koi_prad'] < 1.6;
}

export const loadPlanetData = () => {
    return new Promise((resolve, reject) => {
        fs.createReadStream('kepler_data.csv')
            .pipe(parse({
                comment: '#',
                columns: true,
            }))
            .on('data', (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err)
            })
            .on('end', () => {
                console.log(habitablePlanets.map(planet => {
                    return planet['kepler_name']
                }))
                console.log(`${habitablePlanets.length} habitable planets found!`);
                resolve()
            });
    })
}

export default habitablePlanets