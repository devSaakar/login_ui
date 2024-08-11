"use client";
import React from "react";
import Container from "../ui/Container";
import FormHeader from "../FormHeader";
import UserCredentialsForm from "../UserCredentialsForm";
import { signUpFormObject } from "@/constants";
import FormFotter from "../FormFotter";
import { FormType } from "@/types/formTypes.type";

const SignUp = () => {
  const handleSignUp = (signUpFieldObject: Record<string, string>) => {
    console.log("signUpFieldObject", signUpFieldObject);
  };

  return (
    <div className="flex-center min-h-screen ">
      <Container className="w-116">
        <FormHeader title="SIGN UP" subtitle="Create an account to continue" />
        <UserCredentialsForm
          handleSubmit={handleSignUp}
          formObj={signUpFormObject}
          formType={FormType.SignUp}
        />
        <FormFotter type={FormType.SignUp} />
      </Container>
    </div>
  );
};

export default SignUp;
