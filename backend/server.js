import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoute from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import mongoDB from './db/mongoDB.js'
import { app, httpServer } from './socket/socket.js'

const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json()) //parse the incoming req with json payload from req.body
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


// app.get('/', (req, res) => {
//     res.send("hello world")
// })


httpServer.listen(PORT, () => {
    mongoDB()
    console.log(`server is running on port ${PORT}`)
})