"use client";
import React from "react";
import UserCredentialsForm from "../UserCredentialsForm";
import Container from "../ui/Container";
import FormHeader from "../FormHeader";
import { signInFormObject } from "@/constants";
import FormFotter from "../FormFotter";
import { FormType } from "@/types/formTypes.type";

const LoginForm: React.FC = () => {
  const handleSignIn = (signInFieldObject: Record<string, string>) => {
    console.log("signInFieldObject", signInFieldObject);
  };

  return (
    <div className="flex-center min-h-screen ">
      <Container className="h-105 w-116">
        <FormHeader title="WELCOME BACK" subtitle="Log into your account" />
        <UserCredentialsForm
          handleSubmit={handleSignIn}
          formObj={signInFormObject}
          formType={FormType.SignIn}
        />
        <FormFotter type={FormType.SignIn} />
      </Container>
    </div>
  );
};

export default LoginForm;
