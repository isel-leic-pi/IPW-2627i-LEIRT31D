import express from 'express'

const app = express()

app.use(express.json())

app.get("/", rootHandler)
app.get("/students", getStudentsHandler)
app.get("/students/:number", getStudentHandler)
app.post("/students", createStudentHandler)


app.listen("8080", ()=>console.log("Listening"))

function getStudentsHandler(req, resp){
    console.log("getStudentsHandler")
    console.log(req.query.limit)
    resp.json("getStudentsHandler")
}

function getStudentHandler(req, resp){
    console.log ("getStudentHandler")
    console.log(req.params)
    resp.json("getStudentHandler")
}

function createStudentHandler(req, resp){
    console.log("createStudentHandler")
    console.log(req.body)
    resp.status(201).json("createStudentHandler")
}

function rootHandler(req, resp){
    console.log("rootHandler")
    //resp.json({name : "Root Handler"})
   
    resp.send(`<html>
                    <body>
                        <h1>ROOT HANDLER</h1>
                        <p>root Handler</p>
                    </body>
                </html>`)
}


