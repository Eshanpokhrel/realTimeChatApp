import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "https://helou.vercel.app/",
        methods: ["GET", "POST"]
    }
})

export const getReceiverSocketID = (receiverId) => {
    return userSocketMap[receiverId]
}

const  userSocketMap = {}

io.on("connection", (socket) => {
    console.log("user connected", socket.id)

    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] = socket.id

    //io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUser", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        //socket.on is used to listent to events on both client and server side
        console.log("user disconnected", socket.id)

        delete userSocketMap[userId]
        io.emit("getOnlineUser", Object.keys(userSocketMap))
    })

})


export {app,io,httpServer}