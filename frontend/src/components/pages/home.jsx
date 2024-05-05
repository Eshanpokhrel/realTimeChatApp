import Sidebar from "../sidebar/Sidebar";
import MessageWindow from "./MessageWindow";

const Home = () => {
  return (
    <div className="w-2/3 h-[80%] backdrop-blur-xl bg-white/10 rounded-2xl flex">
      <Sidebar/>
      <MessageWindow/>
    </div>
  );
};

export default Home;
