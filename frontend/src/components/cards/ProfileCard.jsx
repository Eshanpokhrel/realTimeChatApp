import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileCard = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-2 w-[95%] mt-[10.5px] mx-auto">
      <div className="flex space-x-4">
        <div className="flex">
          <img
            src="https://avatar.iran.liara.run/public/girl?username=jane"
            alt="avatar"
            className="rounded-full bg-slate-700 h-10 w-10"
          />
          <FontAwesomeIcon icon={faDotCircle} color="green" className="mt-6 ml-[-15px]"/>
        </div>
        <span className="font-black text-xl">Jane Doe</span>
      </div>
        <div className="flex-1 mt-[-15px] ml-14">
          <span className="text-sm">Message......</span>
        </div>
    </div>
  );
}

export default ProfileCard