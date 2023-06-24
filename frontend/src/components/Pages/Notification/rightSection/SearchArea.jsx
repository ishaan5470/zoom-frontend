import { useState, useRef } from "react";

import SearchIcon from "@mui/icons-material/Search";
import NoSearchResult from "./NoSearchResult";

function SearchArea() {
  const inputRef = useRef();
  const [flag, setFlag] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  function submitHandler(e) {
    e.preventDefault();
    setFlag(true);
    setIsClosed(false);
    inputRef.current.value = "";
  }
  return (
    <div className="w-[250px]">
      <div className="p-2 pl-4 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white">
        <form className="inline-block" onSubmit={submitHandler}>
          <input
            type="text"
            className="outline-0 ml-1"
            placeholder="Search"
            ref={inputRef}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
      {flag && <NoSearchResult handleClose={handleClose} isClosed={isClosed} />}
    </div>
  );
}

export default SearchArea;
