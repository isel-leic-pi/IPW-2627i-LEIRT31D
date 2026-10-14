function printGameInfoThen(){
    return fetch(`https://api.rawg.io/api/games/3498?key=${gameKey}`)
        .then(resp=>{
            console.log(resp.status)
            if(resp.status!=200){
                return Promise.reject(`Status ${resp.status}`)
            }
            return resp.json()
        })   
        .then(game => console.log(game.name))
        .catch(error => {
                console.log(error)
                return Promise.reject(error)
                })
}

printGameInfoThen()
    .then(()=>console.log("DONE"))
    .catch(()=>console.log("Error"))
