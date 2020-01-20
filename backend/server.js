const dotenv = require("dotenv")
dotenv.config()
let app = require('express')()
let mongoose = require('mongoose')
let bodyParser = require('body-parser')

var port = process.env.PORT || 5000

let apiRoutes = require('./routes/api-routes')
let userRoutes = require('./routes/user')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true})
var db = mongoose.connection
if (!db) console.log('Error connecting db')
else console.log('db connected successfully')

app.get('/', (req,res)=> res.send("welcome to Todo server"))
app.use('/todos', apiRoutes)
app.use('/users',userRoutes)
app.listen(port, () => console.log('Server running on port '+port))