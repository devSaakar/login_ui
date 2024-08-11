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
    showExtraComponent: true,
    required: true,
  },
};
