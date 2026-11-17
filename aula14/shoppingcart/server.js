import express from 'express'

//import data from './lists-data.js'
import data from './lists-data-elastic.js'

import {servicesFunction} from './lists-services.js'
import {apiFunction} from './lists-api.js'
import {webSiteFunction} from './lists-web-site.js'

const services = servicesFunction(data)
const api = apiFunction(services)
const webSite = webSiteFunction(services)

import webSite from './lists-web-site.js'

const app = express()

app.use(express.json())

app.set('view engine', 'hbs');

app.get("api/lists", api.getLists)
app.get("api/lists/:listId", api.getList)
app.post("api/lists", api.createList)
app.put("api/lists/:listId", api.updateList)
app.delete("api/lists/:listId", api.deleteList)

app.post("api/lists/:listId/items", api.addItem)
app.delete("api/lists/:listId/items/:itemId", api.removeItem)

app.get("/", webSite.home)
app.get("/lists", webSite.getLists)
app.get("/lists/:listId", webSite.getList)

app.listen(8080, ()=>console.log("Listenning"))

