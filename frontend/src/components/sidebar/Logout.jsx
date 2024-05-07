import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import useLogout from "../../hooks/useLogout";

const Logout = () => {

  const { loading, logout } = useLogout()

  return (
    <div className="h-[15%] bg-white/15 flex justify-between p-8 lg:rounded-bl-2xl ">
      <div className="flex-center gap-4">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src="https://api.multiavatar.com/eshan.png"
            alt="a"
          />
          <div className="">
            <span className="font-black text-xl">Eshan Pokhrel</span>
            <br />
            <span className="">eshanpokhrel</span>
          </div>
      </div>
      <div className="flex items-center ml-12">
        {!loading ? (
          <FontAwesomeIcon
          className="text-2xl"
          icon={faArrowRightToBracket}
          onClick={logout}
        />
        ) : (
          <span className="loading loading-infinity"></span>
        )}
      </div>
    </div>
  )
}

export default Logout