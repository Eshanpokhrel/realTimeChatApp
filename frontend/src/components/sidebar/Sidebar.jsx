import ProfileCard from "../cards/ProfileCard";
import Logout from "./Logout";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="w-full h-full lg:w-1/3 lg:border-r-2 border-slate-500">
      <Search/>
      <div className="h-[70%] overflow-auto">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      <Logout/>
    </div>
  )
}

export default Sidebar