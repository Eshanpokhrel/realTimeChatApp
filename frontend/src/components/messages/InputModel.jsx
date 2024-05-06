import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const InputModel = () => {
  return (
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
  )
}

export default InputModel