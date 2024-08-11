"use client";
import React, { Dispatch, SetStateAction } from "react";
import Form from "../Form";
import Container from "../ui/Container";
import FormHeader from "../Form/FormHeader";
import FormFotter from "../Form/FormFotter";
import { FormType } from "@/types/formTypes.type";
import LogoIcon from "@/public/icons/logo.svg";
import Image from "next/image";
import { useUser } from "@/customHooks/useUser";
import { signInFormObject } from "@/constants/FormData/signInForm";

interface SignInProps {
  setShowModal?: Dispatch<SetStateAction<boolean>>;
}

const SignIn: React.FC<SignInProps> = ({ setShowModal }) => {
  const { setUser } = useUser();

  const handleSignIn = (signInFieldObject: Record<string, string>) => {
    const newUser = {
      username: signInFieldObject.emailOrUsername,
      email: signInFieldObject.emailOrUsername,
    };
    setUser(newUser);
  };

  return (
    <div className="flex-col-center min-h-screen gap-8">
      {!setShowModal && (
        <Image height={40} width={40} src={LogoIcon} alt="Logo icon" />
      )}
      <div className="p-0.5 rounded-lg  bg-gradient-to-r from-[rgb(150,150,150)] to-[#343434]">
        <Container className="h-105 w-116 p-8 ">
          <FormHeader
            title="WELCOME BACK"
            subtitle="Log into your account"
            setShowModal={setShowModal}
          />
          <Form
            handleSubmit={handleSignIn}
            formObj={signInFormObject}
            formType={FormType.SignIn}
          />
          <FormFotter type={FormType.SignIn} />
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
