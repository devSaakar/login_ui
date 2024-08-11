"use client";
import React, { useState } from "react";
import Typography from "../ui/Typography";
import Form from "../Form";
import { postFormObj } from "@/constants";
import { userDetails } from "@/constants/apiResponse";
import { FormType } from "@/types/formTypes.type";
import Posts from "../Posts";
import Container from "../ui/Container";
import SignIn from "@/components/SignIn";
import Modal from "../ui/Modal";
const Homepage: React.FC = () => {
  const { communityEngagementText, welcomeMessage } = userDetails;

  const handlePost = () => {};

  const [showModal, setShowModal] = useState(true);
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
        <Form
          handleSubmit={handlePost}
          formObj={postFormObj}
          formType={FormType.Post}
        />
      </Container>

      <Posts />

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <SignIn setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default Homepage;
