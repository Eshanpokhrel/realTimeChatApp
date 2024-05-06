import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListDots,
  faPaperPlane,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const MessageWindow = () => {
  return (
    <div className="hidden w-full h-full p-3 lg:w-2/3 lg:h-full lg:flex lg:flex-col">
        <div className="h-[15%] w-full p-3 flex justify-between border-2 border-slate-500">
          <div className="flex items-center gap-4">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="https://avatar.iran.liara.run/public/boy?username=john"
              alt="a"
            />
            <span className="font-black text-xl">John Doe</span>
          </div>
          <div className="flex-center gap-6">
            <FontAwesomeIcon icon={faPhone} className="hover:text-white"/>
            <FontAwesomeIcon icon={faVideo} className="hover:text-white"/>
            <FontAwesomeIcon icon={faListDots} className="hover:text-white"/>
          </div>
        </div>
        <div className="messageBox h-[75%]">
          {/* MESSAGE AREA */}
        </div>
        <div className="h-[10%] flex gap-3 justify-center items-end">
          <input
            type="text"
            placeholder="👋"
            className="input input-bordered w-[70%] bg-slate-500 text-white"
          />
          <button className="w-9 h-9 rounded-full bg-gray-600 mb-1.5">
            <FontAwesomeIcon icon={faPaperPlane} color="white" />
          </button>
        </div>
      </div>
  )
}

export default MessageWindow