import { FieldType, InputType } from "@/types/formTypes.type";

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
    required: true,
  },
};
