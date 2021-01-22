const express = require('express')
const app = express()
const PORT = process.env.PORT || 80

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes 
app.use(require('./routers/router'))

app.listen(PORT, console.log(`Server Running on Port: http://localhost:${PORT}`))