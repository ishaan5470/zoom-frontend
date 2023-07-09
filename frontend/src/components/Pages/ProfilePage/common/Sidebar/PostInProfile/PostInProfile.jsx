import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostInProfile({ post }) {
  const navigate = useNavigate();

  const redirectToPost = () => {
    navigate(`/myposts/#${post._id}`);
  };

  return (
    <div
      className="w-[180px] h-[220px] bg-gray-400 object-contain rounded-md mb-5"
      onClick={redirectToPost}
    >
      <img src={post.image} alt={post.image} className="object-cover rounded-md h-full w-full"/>
    </div>
  );
}

export default PostInProfile;

