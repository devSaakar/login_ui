import { FieldType, InputType } from "@/types/formTypes.type";

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

export const postFormObj = {
  postMessage: {
    fieldType: FieldType.Textarea,
    type: InputType.Textarea,
    id: "postMessage",
    label: "Create Post",
    placeholder: "How are you feeling today?",
    value: "",
    hide: false,
  },
};

export const signUpFormObject = {
  email: {
    fieldType: FieldType.Input,
    type: InputType.Email,
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: "",
    hide: false,
    showIcon: false,
  },
  userName: {
    fieldType: FieldType.Input,
    type: InputType.Text,
    id: "username",
    label: "Username",
    placeholder: "Enter your username",
    value: "",
    hide: false,
    showIcon: false,
  },
  password: {
    fieldType: FieldType.Input,
    type: InputType.Password,
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    value: "",
    hide: false,
    showIcon: true,
  },
};

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
  Post: {
    buttonText: "Post",
    footerText: "",
    ctaText: "",
    redirectLink: "",
  },
};
