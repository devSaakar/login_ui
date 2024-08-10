import { PostSchema } from "@/constants/apiResponse";
import React from "react";

interface PostProps {
  data: PostSchema;
}

const Post: React.FC<PostProps> = ({ data }) => {
  const { id, name, time, content, comments, edited } = data;
  return (
    <div key={id} className="post bg-gray-800 p-4 rounded-lg mb-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="font-semibold">{name}</span>
          <span className="ml-2 text-sm text-gray-500">{time}</span>
        </div>
        <div className="text-sm text-gray-500">...</div>
      </div>
      <p className="text-gray-300 mb-2">{content}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span>👋</span>
        <span className="ml-2">{comments} comments</span>
        {edited && <span className="ml-2">(Edited)</span>}
      </div>
    </div>
  );
};

export default Post;
