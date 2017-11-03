import express from 'express'
import path from 'path'

const app = express()

// app.use(express.static(path.join(__dirname + '/public')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})
