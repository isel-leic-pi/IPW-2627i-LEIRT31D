

function getAnimationMovies(){
    const responsePromise = fetch("https://api.sampleapis.com/movies/animation")
    return responsePromise
        .then(resp => resp.json())
        .then(body => console.log(body))
}

function getClassicMovies(){
    const responsePromise = fetch("https://api.sampleapis.com/movies/classic")
    return responsePromise
        .then(resp => resp.json())
        .then(body => console.log(body))
}

getAnimationMovies()
    .then(()=> getClassicMovies())
    .then(()=>console.log("Done"))

const promiseClassicMovies = getClassicMovies()
const promiseAnimationMovies = getAnimationMovies()

const arrayPromises = [promiseClassicMovies, promiseAnimationMovies]
const promise = Promise.all(arrayPromises)

promise
    .then(()=>console.log("Done"))




