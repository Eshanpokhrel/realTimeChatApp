import useGetConversations from "../../hooks/useGetConversation";
import useGetMessages from "../../hooks/useGetMessages";
import useConversation from "../../zustand/useConversation";
import ProfileCard from "../cards/ProfileCard";
import Logout from "./Logout";
import Search from "./Search";

const Sidebar = () => {

  const { loading, conversations } = useGetConversations()
  const {selectedConversation} = useConversation()

  const { messages } = useGetMessages();

  const lastMessage = messages[messages.length - 1];
  console.log(lastMessage)

  return (
    <div className={`w-full h-full lg:w-1/3 lg:border-r-2 border-slate-500 ${selectedConversation ? "hidden lg:block" : ""}`}>
      <Search/>
      <div className="h-[70%] overflow-auto">
        {conversations.map((conversation) => (
          <ProfileCard 
            key={conversation._id} 
            conversation={conversation}
          />
        ))}
        {loading ? <span className="loading loading-ring h-full w-full mx-auto"></span> : null }
      </div>
      <Logout/>
    </div>
  )
}

export default Sidebar