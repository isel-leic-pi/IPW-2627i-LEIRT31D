const users = [
    {
        id : 1,
        name : "Joao",
        token : "abcd"
    }

]

const lists = [
    {
        id : 1,
        userId : 1,
        name : "supermercado",
        items : []
    }

]

let nextId = 2

function getUser(token){
    return Promise.resolve(users.find((user)=>user.token == token))
}

function getLists(userId){
    return Promise.resolve(lists.filter((l)=>l.userId==userId))
} 

function getList(userId,id){
    return Promise.resolve(lists.find((l)=>l.id == id && l.userId == userId))
} 

function createList(userId, name){
    const list = {id : nextId++,userId , name, items:[]}
    lists.push(list)
    return Promise.resolve(list)
} 

function updateList(id, name, items){
    return "updateList"
} 

function deleteList(id){
   return "deleteList"
}

function addItem(name){
    return "addItem"
}

function removeItem(id){
    return "removeItem"
}

export default  {
    getLists,
    getList,
    createList,
    updateList,
    deleteList,
    addItem,
    removeItem,
    getUser
}

