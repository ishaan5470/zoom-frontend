import React from 'react';

function PostCard() {
  return (
    <div>
    <div className="bg-[#f1f1f1] rounded-lg flex flex-col items-start px-5 py-8">
    <span className="text-2xl font-semibold text-center mb-[20px] ml-[10px]">Add More Content</span>
      <form className="flex items-start justify-center gap-[5px] flex-col w-full">
        <input className="w-[80%] p-[10px] border-none rounded-xl text-base bg-[#f1f1f1]" type="text" placeholder="Add"/>
        <input className="w-[80%] p-[10px] border-none rounded-xl text-base bg-[#f1f1f1]" type="text" placeholder="How was your experience!" />
        <button className="py-[20px] px-[40px] rounded-xl border-none cursor-pointer bg-[#d1d1d1] self-end font-semibold hover:bg-[#aaaaaa]" type="submit"> Add </button>
      </form>
      </div>
    </div>
  )
}

export default PostCard;
