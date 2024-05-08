import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const Logout = () => {

  const { loading, logout } = useLogout()
  const {authUser} = useAuthContext()

  return (
    <div className="h-[15%] bg-white/15 flex justify-between p-8 lg:rounded-bl-2xl ">
      <div className="flex-center gap-4">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={authUser.avatar}
            alt="a"
          />
          <div className="">
            <span className="font-black text-xl">{authUser.fullName}</span>
            <br />
            <span className="">{authUser.username}</span>
          </div>
      </div>
      <div className="flex items-center ml-12 relative">
        {!loading ? (
        <div className="tooltip" data-tip="Logout">
          <FontAwesomeIcon
          className="text-2xl"
          icon={faArrowRightToBracket}
          onClick={logout}
          />
        </div>
        ) : (
          <span className="loading loading-infinity"></span>
        )}
      </div>
    </div>
  )
}

export default Logout