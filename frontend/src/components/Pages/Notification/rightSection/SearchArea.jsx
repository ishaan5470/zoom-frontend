import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import NoSearchResult from "./NoSearchResult";

function SearchArea() {
  const [flag, setFlag] = useState(false);

  function searchHandler(e) {
    e.preventDefault();
    setFlag(true);
  }
  return (
    <div className="w-[250px]">
      <div className="p-2 pl-4 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white">
        <form className="inline-block" onSubmit={searchHandler}>
          <input type="text" className="outline-0 ml-1" placeholder="Search" />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
      {flag && <NoSearchResult />}
    </div>
  );
}

export default SearchArea;
