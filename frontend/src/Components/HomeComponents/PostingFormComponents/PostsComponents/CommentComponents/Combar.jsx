import React, { useState } from 'react';
import { InsertEmoticon, Send } from '@mui/icons-material';
import { useAddCommentToPostMutation } from "../../../../../redux/api/sspost";

function Combar({ pid, uid }) {
  const [inputValue, setInputValue] = useState('');


  const [addComment, data] = useAddCommentToPostMutation();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearClick = () => {
    console.log(uid)
    addComment({ postid: pid, id: uid, description: inputValue });

    console.log(data);
    setInputValue('');
  };

  return (
    <div className="flex items-center gap-2 ">
      <div className="w-[60px] h-[60px] mx-1 object-cover bg-transparent rounded-[100px]">
        <img src="/Images/profilePic.png" className="rounded-[150px] w-full h-full object-cover" alt="Pfimg" />
      </div>
      <div className="rounded-3xl border-2 flex items-center flex-grow py-2 gap-3 px-4">
        <input type="text" className="h-[2rem] w-full bg-transparent" placeholder="Enter Comment" value={inputValue} onChange={handleInputChange} />
        <InsertEmoticon />
        <div className="" onClick={handleClearClick}>
          <Send />
        </div>
      </div>
    </div>
  );
}

export default Combar;
