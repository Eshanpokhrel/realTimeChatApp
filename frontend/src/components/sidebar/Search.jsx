import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Search = () => {
  return (
    <div className="h-[15%] flex-center gap-3 bg-white/15 lg:rounded-tl-2xl">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[70%] bg-slate-500 text-white placeholder:text-white"
          />
          <button className="w-9 h-9 rounded-full bg-gray-600">
            <FontAwesomeIcon icon={faSearch} color="white" />
          </button>
        </div>
  )
}

export default Search