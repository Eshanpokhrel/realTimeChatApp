import Header from "./Header";
import ConvoBox from "./ConvoBox";
import InputModel from "./InputModel";

const MessageWindow = () => {

  const chatSelection = false

  return (
    <div className="hidden w-full h-full p-3 lg:w-2/3 lg:h-full lg:flex lg:flex-col">
      {!chatSelection ? <ChatNotSelected/> : (
        <>
        <Header/>
        <ConvoBox/>
        <InputModel/>
        </>
      )}
    </div>
  )
}

export default MessageWindow



const ChatNotSelected = () => {
  return (
    <div className="h-full flex-center flex-col bg-gradient-radial from-yellow-200 via-white/50 to-transparent rounded-2xl">
      <span className="text-emerald-700 title-font">
        helou
      </span>
      <span className="text-center text-teal-500">
      🙋‍♂️🤝<br/>Welcome!<br />
        Select a conversation and start chatting.
      </span>      
    </div>
  )
}
