import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
  senderId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message:{
    type: String,
    required: true
  },
},{timestamps: true})   //created at and updated at(makes the timestamps for when the message was sent)

const Message = mongoose.model('Message',messageSchema)

export default Message