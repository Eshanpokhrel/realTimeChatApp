import mongoose from 'mongoose'

const convoSchema = new mongoose.Schema({
  participants:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
    default: [],
  }],
},{timestamps: true})

const Convo = mongoose.model("Convo", convoSchema);

export default Convo