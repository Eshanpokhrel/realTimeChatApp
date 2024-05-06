import Message from "./Message"


const ConvoBox = () => {
  return (
    <div className="messageBox h-[75%] overflow-auto">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default ConvoBox