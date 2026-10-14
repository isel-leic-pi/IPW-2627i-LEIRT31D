function operation(){
    console.log("Operation Done")
}

setTimeout(()=>operation(), 2000)

const p1 = new Promise((resolve, reject)=>resolve(84))
const p2 = new Promise((resolve, reject)=>reject("E 21"))
const p3 = new Promise((resolve, reject)=>{
                setTimeout(()=>resolve(84),2000)
            })
p1
    .then(m=>console.log("Value ",m))
    .catch(e=>console.log("Error -", e))

p2
    .then(m=>console.log("Value ",m))
    .catch(e=>console.log("Error -", e))

p3
    .then(m=>console.log("Value Timeout ",m))

function delay(operation,timeout){
    return new Promise((resolve, reject)=>{
                setTimeout(()=>resolve(operation()),timeout)
            })
}

delay(operation, 2000)
    .then(()=>console.log("Operation Done"))