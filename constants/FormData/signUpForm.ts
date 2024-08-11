import { FieldType, InputType } from "@/types/formTypes.type";

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
    required: true,
  },
  username: {
    fieldType: FieldType.Input,
    type: InputType.Text,
    id: "username",
    label: "Username",
    placeholder: "Enter your username",
    value: "",
    hide: false,
    iconInput: false,
    required: true,
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
    required: true,
  },
};
