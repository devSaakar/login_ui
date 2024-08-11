import { posts } from "@/constants/apiResponse";
import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </>
  );
};

export default Posts;
