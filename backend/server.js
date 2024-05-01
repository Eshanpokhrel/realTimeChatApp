import express from 'express'
import dotenv from 'dotenv'
import authRoute from "./routes/auth.routes.js"
import mongoDB from './db/mongoDB.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("hello world")
})

app.use("/api/auth", authRoute)

app.listen(PORT, () => {
    mongoDB()
    console.log(`server is running on port ${PORT}`)
})