"use client";
import React, { useState } from "react";
import Typography from "../ui/Typography";
import Form from "../Form";
import { heroSectionDetails } from "@/constants/apiResponse";
import { FormType } from "@/types/formTypes.type";
import Posts from "../Posts";
import Container from "../ui/Container";
import { useUser } from "@/customHooks/useUser";
import { capitalizeFirstLetter } from "@/utils/utils";
import { postFormObj } from "@/constants/FormData/postForm";
const Homepage: React.FC = () => {
  const { user } = useUser();
  const { communityEngagementText } = heroSectionDetails;

  const handlePost = () => {};
  return (
    <div className="post-container w-175  text-white p-4 rounded-lg shadow-lg mx-auto">
      <div className="header w-116">
        <Typography
          className="text-2xl font-semibold mb-4 text-grayCool-3"
          size="xxxlg"
        >
          Hello {capitalizeFirstLetter(user?.username as string) || "Jane"}
        </Typography>
        <Typography className="mb-6 text-grayCool-4" size="base">
          {communityEngagementText}
        </Typography>
      </div>
      <Container className="mb-3 bg-grayCool-1 p-6">
        <Form
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
