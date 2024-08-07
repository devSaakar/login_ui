import { InputType } from "@/components/ui/Input";

export const signInFormObject = {
  emailOrUsername: {
    type: InputType.Text,
    id: "emailOrUsername",
    label: "Email or Username",
    placeholder: "Enter your email or username",
    value: "",
    hide: false,
  },
  password: {
    type: InputType.Password,
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    value: "",
    hide: false,
  },
};

export const signUpFormObject = {
  email: {
    type: InputType.Email,
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: "",
    hide: false,
  },
  userName: {
    type: InputType.Text,
    id: "username",
    label: "Username",
    placeholder: "Enter your username",
    value: "",
    hide: false,
  },
  password: {
    type: InputType.Password,
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    value: "",
    hide: false,
  },
};

export enum FormType {
  SignIn = "SignIn",
  SignUp = "SignUp",
}

export const formDetails = {
  SignIn: {
    buttonText: "Login now",
    footerText: "Not registered yet?",
    ctaText: "Register →",
    redirectLink: "/sign-up",
  },
  SignUp: {
    buttonText: "Continue",
    footerText: "Already have an account?",
    ctaText: "Login →",
    redirectLink: "/sign-in",
  },
};
