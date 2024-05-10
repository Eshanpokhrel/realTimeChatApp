import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faListDots,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import useConversation from "../../zustand/useConversation";

const Header = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // useEffect(() => {
  //   return () => setSelectedConversation(null)    //component unmounting(clears the message window)
  // },[setSelectedConversation])

  return (
    <div className="h-[15%] w-full p-3 flex justify-between border-2 border-slate-500">
      <div className="flex items-center gap-4">
        <FontAwesomeIcon
          className="h-5 lg:hidden"
          icon={faArrowLeft}
          onClick={() => setSelectedConversation(null)}
        />
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={selectedConversation.avatar}
          alt="avatar"
        />
        <span className="font-black text-xl">
          {selectedConversation.fullName}
        </span>
      </div>
      <div className="flex-center gap-6">
        <FontAwesomeIcon icon={faPhone} className="hover:text-white" />
        <FontAwesomeIcon icon={faVideo} className="hover:text-white" />
        <FontAwesomeIcon icon={faListDots} className="hover:text-white" />
      </div>
    </div>
  );
};

export default Header;
