import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListDots,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
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
  )
}

export default Header