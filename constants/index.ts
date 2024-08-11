import { FieldType, InputType } from "@/types/formTypes.type";

export const signInFormObject = {
  emailOrUsername: {
    fieldType: FieldType.Input,
    type: InputType.Text,
    id: "emailOrUsername",
    label: "Email or Username",
    placeholder: "Enter your email or username",
    value: "",
    hide: false,
    iconInput: false,
  },
  password: {
    fieldType: FieldType.Input,
    type: InputType.Password,
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    value: "",
    hide: false,
    iconInput: false,
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
    iconInput: false,
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
    iconInput: false,
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
    iconInput: false,
  },
};

export const postFormObj = {
  postMessage: {
    fieldType: FieldType.PostInput,
    type: InputType.Text,
    id: "postMessage",
    label: "Create Post",
    placeholder: "How are you feeling today?",
    value: "",
    hide: false,
    iconInput: true,
  },
};

export const formDetails = {
  SignIn: {
    buttonText: "Login now",
    buttonClassName: "",
    footerText: "Not registered yet?",
    ctaText: "Register →",
    redirectLink: "/sign-up",
  },
  SignUp: {
    buttonText: "Continue",
    buttonClassName: "",
    footerText: "Already have an account?",
    ctaText: "Login →",
    redirectLink: "/sign-in",
  },
  Post: {
    buttonText: "Post",
    buttonClassName: "w-28 ",
    footerText: "",
    ctaText: "",
    redirectLink: "",
  },
};

export const emojis = ["💬", "😂", "👋", "😞"];

enum Emoji {
  Message = "Message",
  Laugh = "Laugh",
  Hi = "Hi",
  Sad = "Sad",
}

// export const emojiMapping = {
//   Message: "💬",
//   Laugh : "😂",
//   Hi : "👋",
//   Sad : "😞",
// };
