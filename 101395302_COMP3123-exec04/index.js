var express = require("express")

const SERVER_PORT = 8089
var app = express()

 
app.use(express.json())  
app.use(express.text())  
app.use(express.urlencoded({ extended: true })) 

// 1 - GET request: /hello return "Hello Express JS"
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})


// 2 - GET request: /user return
// { "firstname": "Pritesh", "lastname": "Patel" }. Use Querystring to send values
// http://localhost:8089/user?firstname=Pritesh&lastname=Patel
app.get("/user", (req, res) => {
    const { firstname, lastname } = req.query
    const p = {
        firstname: firstname,
        lastname: lastname
    }
    res.json(p)
})

// 3 - POST request: /user return
// { "firstname": "Pritesh", "lastname": "Patel" }. Use path parameter to send values
// http://localhost:8089/user/Pritesh/Patel
app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params
    const p = {
        firstname: firstname,
        lastname: lastname
    }
    res.json(p) 
})



app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)

})

