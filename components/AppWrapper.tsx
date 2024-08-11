import usePath from "@/customHooks/usePath";
import { useUser } from "@/customHooks/useUser";
import { FormTypeQuery } from "@/types/formTypes.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Modal from "./ui/Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Toast from "./ui/Toast";
import { restrictPaths } from "@/constants";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const { user } = useUser() || {};

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString } = usePath();

  const formType = searchParams.get("formType");

  useEffect(() => {
    if (user) {
      setShowModal(false);
      if (restrictPaths.includes(pathname)) {
        router.push(pathname);
      } else {
        router.push("/");
      }
      return;
    } else if (restrictPaths.includes(pathname)) {
      setShowModal(true);
      router.push(
        pathname + "?" + createQueryString("formType", FormTypeQuery.signIn)
      );
    }
  }, [showModal, user, pathname]);

  console.log("user AppWrapper", user);

  return (
    <div>
      <Toast />
      {formType && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {formType === FormTypeQuery.signIn ? (
            <SignIn setShowModal={setShowModal} />
          ) : (
            <SignUp setShowModal={setShowModal} />
          )}
        </Modal>
      )}
      <div
        className={`w-full ${
          showModal ? "h-screen overflow-hidden" : "h-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AppWrapper;
