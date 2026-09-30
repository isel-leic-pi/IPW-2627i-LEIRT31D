

function changeConsoleLog(){
    const oldConsoleLog = console.log
    console.log = function(p){
        const d = Date()
        oldConsoleLog.apply(console, d,p)
    }
}

changeConsoleLog()

console.log("Hello World")

//DATA HelloWorld