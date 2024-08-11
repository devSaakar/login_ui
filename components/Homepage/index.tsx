"use client";
import React, { useState } from "react";
import Typography from "../ui/Typography";
import UserCredentialsForm from "../UserCredentialsForm";
import { postFormObj } from "@/constants";
import { userDetails } from "@/constants/apiResponse";
import { FormType } from "@/types/formTypes.type";
import Posts from "../Posts";
import Container from "../ui/Container";
import EmojiInput from "../ui/EmojiInput";
import Tooltip from "../ui/Tooltip";

const Homepage: React.FC = () => {
  const { communityEngagementText, welcomeMessage } = userDetails;

  const handlePost = () => {};
  return (
    <div className="post-container w-175  text-white p-4 rounded-lg shadow-lg mx-auto">
      <div className="header w-116">
        <Typography
          className="text-2xl font-semibold mb-4 text-grayCool-3"
          size="xxxlg"
        >
          {welcomeMessage}
        </Typography>
        <Typography className="mb-6 text-grayCool-4" size="base">
          {communityEngagementText}
        </Typography>
      </div>
      <Container className="mb-3 bg-grayCool-1 p-6">
        <UserCredentialsForm
          handleSubmit={handlePost}
          formObj={postFormObj}
          formType={FormType.Post}
        />
      </Container>

      <Posts />
    </div>
  );
};

export default Homepage;
