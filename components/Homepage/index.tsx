"use client";
//   return <Typography size="lg">Homepage</Typography>;
import React from "react";
import Typography from "../ui/Typography";
import UserCredentialsForm from "../UserCredentialsForm";
import { postFormObj } from "@/constants";
import { posts, userDetails } from "@/constants/apiResponse";
import { FormType } from "@/types/formTypes.type";

const Homepage: React.FC = () => {
  const { communityEngagementText, welcomeMessage } = userDetails;

  const handlePost = () => {};
  return (
    <div className="post-container bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <Typography className="text-2xl font-semibold mb-4" size="lg">
        {welcomeMessage}
      </Typography>
      <Typography className="mb-6" size="sm">
        {communityEngagementText}
      </Typography>

      <UserCredentialsForm
        handleSubmit={handlePost}
        formObj={postFormObj}
        formType={FormType.Post}
      />
      {posts.map((post) => (
        <div key={post.id} className="post bg-gray-800 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="font-semibold">{post.name}</span>
              <span className="ml-2 text-sm text-gray-500">{post.time}</span>
            </div>
            <div className="text-sm text-gray-500">...</div>
          </div>
          <p className="text-gray-300 mb-2">{post.content}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>👋</span>
            <span className="ml-2">{post.comments} comments</span>
            {post.edited && <span className="ml-2">(Edited)</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
