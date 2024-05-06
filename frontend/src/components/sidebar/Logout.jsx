import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  return (
    <div className="h-[15%] bg-white/15 flex justify-between p-8 lg:rounded-bl-2xl ">
      <div className="flex-center gap-4">
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
      </div>
      <div className="flex items-center ml-12">
        <FontAwesomeIcon
          className="text-2xl"
          icon={faArrowRightToBracket}
        />
      </div>
    </div>
  )
}

export default Logout