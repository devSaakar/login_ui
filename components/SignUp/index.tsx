"use client";
import React, { Dispatch, SetStateAction } from "react";
import Container from "../ui/Container";
import FormHeader from "../Form/FormHeader";
import Form from "../Form";
import FormFotter from "../Form/FormFotter";
import { FormType } from "@/types/formTypes.type";
import { useUser } from "@/customHooks/useUser";
import { signUpFormObject } from "@/constants/FormData/signUpForm";

interface SignUnProps {
  setShowModal?: Dispatch<SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUnProps> = ({ setShowModal }) => {
  const { setUser } = useUser();
  const handleSignUp = (signUpFieldObject: Record<string, string>) => {
    const newUser = {
      username: signUpFieldObject.username,
      email: signUpFieldObject.email,
    };
    setUser(newUser);
  };

  return (
    <div className="flex-center min-h-screen ">
      <div className="p-0.5 rounded-lg  bg-gradient-to-r from-[rgb(150,150,150)] to-[#343434]">
        <Container className="w-116 p-8">
          <FormHeader
            setShowModal={setShowModal}
            title="SIGN UP"
            subtitle="Create an account to continue"
          />
          <Form
            handleSubmit={handleSignUp}
            formObj={signUpFormObject}
            formType={FormType.SignUp}
          />
          <FormFotter type={FormType.SignUp} />
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
