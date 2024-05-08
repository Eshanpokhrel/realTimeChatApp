import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const InputModel = () => {

  const [message, setMessage] = useState("")
  const {loading, sendMessage} = useSendMessage()

  const handleClick = async (e) => {
    e.preventDefault();
    if(!message) return
    await sendMessage(message)
    setMessage("")
  }

  return (
    <form onSubmit={handleClick}>
      <div className="h-full flex gap-3 justify-center items-end">
        <input
          type="text"
          placeholder="👋"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input input-bordered w-[70%] bg-slate-500 text-white"
        />
        <button className="w-9 h-9 rounded-full bg-gray-600 mb-1.5">
          {loading ? <span className="loading loading-infinity0"></span> : <FontAwesomeIcon icon={faPaperPlane} color="white" />}
        </button>
    </div>
    </form>
  )
}

export default InputModel