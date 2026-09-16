function f1(){
    console.log("Hello World")
}

const a = f1()
f1.email = "example@mail.pt"
console.log(f1)

const f2 = function() {return "Hello World"}

console.log(f2())

function f4(p1,p2,...rest){
    console.log("Start f4")
    console.log("p1 = " + p1)
    console.log("p2 = " + p2)
    console.log(rest)
}

f4()
f4(1)
f4(1,2)
f4(1,2,3,4)


function add(a,b){return a+b}
function sub(a,b){return a-b}

function  executeAndPrint(a,b,f){
    const r = f(a,b)
    console.log(r)
}

executeAndPrint(5,3,add)
executeAndPrint(5,3,sub)
executeAndPrint(5,2,(a,b)=>a*b)
executeAndPrint(5,2,(a,b)=>{ 
    const c = a/b
    return c 
})