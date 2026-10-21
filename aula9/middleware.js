import express from 'express'

const app = express()


app.use(m2)
app.use("/auth", m1)
app.use(m3)


app.get("/", rootHandler)

app.listen(8080,()=>console.log("Listening!!!!"))

function m1(request, response, next){
    console.log("M1", Date())
    next()
    //response.json("M1")
}

function m2(request, response, next){
    console.log("M2")
    next()
    //response.json("M1")
}
function m3(request, response, next){
    console.log("M3")
    next()
    //response.json("M1")
}

function rootHandler(request, response){
    console.log("rootHandler")
    response.json("rootHandler")
}
