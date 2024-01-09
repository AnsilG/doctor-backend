//1
const jsonServer = require('json-server')

//2
const restServer = jsonServer.create()

//3
const router = jsonServer.router('db.json')

//4
const middilware = jsonServer.defaults()

//5
const port = 3001

//6
restServer.use(middilware)
restServer.use(router)

//7
restServer.listen(port,()=>{
    console.log("rest server listening on port" +port);
})