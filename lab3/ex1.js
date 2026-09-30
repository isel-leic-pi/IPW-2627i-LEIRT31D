import fs from 'node:fs/promises'

function readAndFilter(){
    const readPromise = fs.readFile("liga.json")
    return readPromise
                .then(data => {
                    const teamsArray = JSON.parse(data)
                    const teamsFilteredArray = teamsArray.filter(team => team.goals > 10)
                    return teamsFilteredArray
                })
                
}

readAndFilter()
    .then(x => console.log(x))

