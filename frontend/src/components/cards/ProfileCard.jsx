import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const ProfileCard = ({conversation}) => {

  const {selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id
  const { onlineUsers } = useSocketContext()
  const isOnline  = onlineUsers.includes(conversation._id)
  
  // console.log(isOnline)
  // console.log(conversation._id)

  return (
    <div 
      className={`border border-blue-300 shadow rounded-md p-2 w-[95%] 
      mt-[10.5px] mx-auto hover:bg-white/50 hover:text-gray-600 
      ${isSelected ? "bg-white/50 text-gray-600" : ""}`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className="flex space-x-4">
        <div className={`avatar ${isOnline ? "online" : ""} flex h-10 w-10`}>
          <img
            src={conversation.avatar}
            alt="avatar"
            className="rounded-full bg-slate-700"
          />
        </div>
        <span className="font-black text-xl">{conversation.fullName}</span>
      </div>
        <div className="flex-1 mt-[-15px] ml-14">
          <span className="text-sm">messages</span>
        </div>
    </div>
  );
}

export default ProfileCard