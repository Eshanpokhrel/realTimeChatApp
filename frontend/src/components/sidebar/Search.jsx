import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }
    else toast.error("User not found")
  };

  return (
    <div className="h-[15%] bg-white/15 lg:rounded-tl-2xl">
      <form onSubmit={handleSubmit} className="flex-center gap-3 h-full">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-[70%] bg-slate-500 text-white placeholder:text-white"
        />
        <button type="submit" className="w-9 h-9 rounded-full bg-gray-600">
          <FontAwesomeIcon icon={faSearch} color="white" />
        </button>
      </form>
    </div>
  );
};

export default Search;
