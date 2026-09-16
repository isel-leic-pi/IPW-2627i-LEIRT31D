const std = {name: "Filipe", number : 12123}

console.log(std)
console.log(std.name)

std.email = "example@mail.pt"
console.log(std.email)

delete std.email
console.log(std.email)

console.log(std.number)
console.log(std["number"])

function showProps(obj)
{
    for(let p in obj)
    {
        console.log(p + " - " + obj[p])
    }
}

showProps(std)

