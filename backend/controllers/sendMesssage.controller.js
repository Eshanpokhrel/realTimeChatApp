import Convo from "../models/convo.model.js"
import Message from "../models/message.model.js"
import { getReceiverSocketID, io } from "../socket/socket.js"

export const sendMesssage = async (req, res) => {
    // console.log("message sent", req.params.id)
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let conversation = await Convo.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        if(!conversation){
            conversation = await Convo.create({
                participants: [senderId, receiverId],
            })
        }
        
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // await conversation.save()
        // await newMessage.save()

        //runs parallely and takes less time
        await Promise.all([conversation.save(), newMessage.save()])

        //Sockei io
        const receiverSocketID = getReceiverSocketID(receiverId)
        if(receiverSocketID){
            //io.to().emit() is used to send events to a particular client
            io.to(receiverSocketID).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in sendMessage controller", error.message)
        res.status(500).json({ error: "internal server error" })
    }
}

export const getMesssage = async (req, res) => {
    try {
        const { id:userToChatId } = req.params
        const senderId = req.user._id
        
        const conversation = await Convo.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages") //mongodb method that provides the messages

        if(!conversation) return res.status(404).json([])

        res.status(200).json(conversation.messages)

    } catch (error) {
        console.log("Error in getMessage controller", error.message)
        res.status(500).json({ error: "internal server error" })
    }
}

