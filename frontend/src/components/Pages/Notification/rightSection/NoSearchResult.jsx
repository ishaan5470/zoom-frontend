import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function NoSearchResult({ handleClose, isClosed }) {
  return (
    <div
      className={
        isClosed ? "hidden" : "h-80 w-80 bg-white mt-2.5 -ml-10 p-3.5"
      }
    >
      <div className="flex justify-between items-center">
        <p className="tracking-wider text-xl">0 found</p>
        <h1 className="cursor-pointer" onClick={handleClose}>
          <HighlightOffIcon />
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6146/6146689.png"
          alt="photo"
          className="h-24 w-24 mt-3.5"
        />
        <p className="tracking-wider text-3xl font-thin">Not found</p>
        <p>
          We apologize but the term you entered could not be found. Please try
          again or try a different term.
        </p>
      </div>
    </div>
  );
}

export default NoSearchResult;
