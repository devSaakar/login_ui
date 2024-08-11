"use client";
import React from "react";
import Container from "../ui/Container";
import FormHeader from "../FormHeader";
import Form from "../Form";
import { signUpFormObject } from "@/constants";
import FormFotter from "../FormFotter";
import { FormType } from "@/types/formTypes.type";

const SignUp = () => {
  const handleSignUp = (signUpFieldObject: Record<string, string>) => {
    console.log("signUpFieldObject", signUpFieldObject);
  };

  return (
    <div className="flex-center min-h-screen ">
      <Container className="w-116 p-8">
        <FormHeader title="SIGN UP" subtitle="Create an account to continue" />
        <Form
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
