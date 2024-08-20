import { useNavigate } from "react-router-dom";
import { Search } from "../assets/icons";
import { useState } from "react";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`);
    }
  };
  const handleKeyDown = (e) => {
    if (searchQuery.trim()) {
      if (e.key === "Enter") {
        navigate(`/search?query=${searchQuery.trim()}`);
      }
    }
  };
  return (
    <div
      className={`flex justify-between items-center bg-[#1c1c24] rounded-full p-2`}
    >
      <input
        type="text"
        placeholder="Search for campaigns"
        className="bg-transparent outline-none text-white placeholder:text-slate-700 px-3 flex-1"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onKeyDown={handleKeyDown}
      />

      <button
        className="px-6 py-2.5 bg-primary-b rounded-3xl"
        onClick={onSearch}
      >
        <Search className="text-white" />
      </button>
    </div>
  );
};

export default SearchBox;
