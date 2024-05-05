import ProfileCard from "../cards/ProfileCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket,faSearch } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-1/3 h-full border-r-2 border-slate-500">
        <div className="h-[15%] flex-center gap-3 bg-white/15 rounded-tl-2xl">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[70%] bg-slate-500 text-white placeholder:text-white"
          />
          <button className="w-9 h-9 rounded-full bg-gray-600">
            <FontAwesomeIcon icon={faSearch} color="white" />
          </button>
        </div>
        <div className="h-[70%] overflow-scroll">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
        <div className="h-[15%] bg-white/15 flex gap-4 p-4 rounded-bl-2xl ">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src="https://avatar.iran.liara.run/public/boy?username=eshan"
            alt="a"
          />
          <div className="">
            <span className="font-black text-xl">Eshan Pokhrel</span>
            <br />
            <span className="">eshanpokhrel</span>
          </div>
          <div className="flex items-center ml-12">
            <FontAwesomeIcon
              className="text-2xl"
              icon={faArrowRightToBracket}
            />
          </div>
        </div>
      </div>
  )
}

export default Sidebar