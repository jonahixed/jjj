const express = require('express')
const app = express()
const userroute = require("./route/userroute") 
const port = 3000
const db = mongodb+srv://jonah:<password>@cluster0.dqshm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

db ()

app.get('/', (req, res) => {
  res.send('welcome to my api')
})

app.use(express.json());

app.use("/api/users", userroute)




app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})