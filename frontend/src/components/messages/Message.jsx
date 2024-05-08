import { useAuthContext } from "../../context/AuthContext";
import { formatDate } from "../../timeFormatter/format";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {

  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const sender = message.senderId === authUser._id
  const chatBubbleStyle = sender ? "chat-end" : "chat-start"
  const avatar = sender ? authUser.avatar : selectedConversation?.avatar
  const bubbleBg = sender ? "bg-emerald-600" : "bg-teal-600"
  const time = formatDate(message.updatedAt)

  return (
    <>
      <div className={`chat ${chatBubbleStyle}`}>
        <div className="chat-image">
            <img src={avatar} alt="user-avatar" className="h-7 w-7"/>  
        </div>
        <div className={`chat-bubble ${bubbleBg} text-white`}>
          {message.message}
        </div>
        <time className="text-xs opacity-50">{time}</time>
      </div>
    </>
  );
};

export default Message;
