import { FormTypeQuery } from "@/types/formTypes.type";

const formDetails = {
  SignIn: {
    buttonText: "Login now",
    buttonClassName: "",
    footerText: "Not registered yet?",
    ctaText: "Register →",
    redirectLink: "/sign-up",
    formTypeQuery: FormTypeQuery.signUp,
  },
  SignUp: {
    buttonText: "Continue",
    buttonClassName: "",
    footerText: "Already have an account?",
    ctaText: "Login →",
    redirectLink: "/sign-in",
    formTypeQuery: FormTypeQuery.signIn,
  },
  Post: {
    buttonText: "Post",
    buttonClassName: "w-28 ",
    footerText: "",
    ctaText: "",
    redirectLink: "",
    formTypeQuery: "",
  },
};

export default formDetails;
