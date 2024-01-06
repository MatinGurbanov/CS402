const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
require('dotenv').config()
const app = express()
app.use(bodyParser.json())

let  users = [
{
    id: 1,
    name: "metin"
},
{
    id: 2,
    name: 'abbas'
}
]

app.get('/', (req, res)=> {
    res.json(users)
})

app.delete('/:id', (req, res) => {
    const { id } = req.params
    users = users.filter((item) => item.id != id)
    res.json('user deleted succesfully')

})
app.post('/', (req, res) => {
    const userBody = req.body
    users.push(userBody)
    res.send('User added successfully')
})

const PORT = process.env.PORT
console.log(PORT);
app.listen(PORT,() => console.log(`server is running: http://localhost:${PORT}`.green.bold))