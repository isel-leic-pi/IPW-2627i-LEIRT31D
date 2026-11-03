import data from "./lists-data.js"

function getUser(token){
    return data.getUser(token)
}

function getLists(userId){
    return data.getLists(userId)
} 

function getList(userId,id){
    return data.getList(userId,id)
            .then(list=>{
                if(!list) return Promise.reject({
                    code : "e1",
                    message : "LIST NOT FOUND"
                })
                return list 
            })
} 

function createList(userId,name){
    return data.createList(userId,name)
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

