import Sidebar from "../sidebar/Sidebar";
import MessageWindow from "./MessageWindow";

const Home = () => {
  return (
    <div className="w-full h-full lg:w-2/3 lg:h-[80%] backdrop-blur-xl bg-white/10 flex lg:rounded-2xl ">
      <Sidebar/>
      <MessageWindow/>
    </div>
  );
};

export default Home;
