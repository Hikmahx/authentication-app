const express = require('express')
const app = express()

const PORT = 5000
console.log('Hello')

app.listen(PORT, ()=> console.log('This is listening on PORT: ' + PORT))