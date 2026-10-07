import {games} from "./games.js"

function changeFetch(){
    fetch = (url) => Promise.resolve(
            { 
                status : 200,
                json : () => Promise.resolve(JSON.parse(games["ID3498"]))
        })      
}
changeFetch()

function printGameInfoThen(){
    return fetch("https://api.rawg.io/api/games/3498?key=5885a13683e643cc885f811e24faf006")
        .then(resp=>{
            console.log(resp.status)
            return resp.json()
        })   
        .then(game => console.log(game.name))
        .catch(error => console.log(error))
}

async function printGameInfoAsync(){
    try{
        const resp = await fetch("https://api.rawg.io/api/games/3498?key=5885a13683e643cc885f811e24faf006")
        console.log(resp.status)
        const game = await resp.json()
        console.log(game.name)
        return 3
    }catch(error){
        console.log(error)
    }

}




printGameInfoThen()
    .then(()=>console.log("THEN DONE"))

printGameInfoAsync()
    .then(a =>console.log("ASYNC DONE"))

console.log("DONE???")