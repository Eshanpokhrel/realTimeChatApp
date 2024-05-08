import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import ChatSkeleton from "../skeleton/ChatSkeleton";
import Message from "./Message";
import useSeeMessages from "../../hooks/useSeeMessages";

const ConvoBox = () => {

  const { loading, messages } = useGetMessages();
  const lastMessage = useRef();
  useSeeMessages()

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({behavior: "smooth"})
    },50)
  },[messages])

  return (
    <div className="p-3 h-[75%] overflow-auto">
      {loading && <ChatSkeleton/>}
      {!loading && messages.length === 0 && <p className=" h-full flex-center text-lg text-emerald-500">Start Chatting!!</p>}
      {!loading && messages.length > 0 && messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message}/>
          </div>
        ))
      }
    </div>
  );
};

export default ConvoBox;
