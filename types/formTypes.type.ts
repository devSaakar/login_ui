export interface FormObjType {
  fieldType?: FieldType;
  type: InputType;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  hide: boolean;
  required: boolean;
  showIcon?: boolean;
  showExtraComponent?: boolean;
}

export type FormObjectType = Record<string, FormObjType>;

export enum InputType {
  Text = "text",
  Email = "email",
  Password = "password",
  Number = "number",
  Tel = "tel",
  Url = "url",
}

export enum FieldType {
  Input = "Input",
  PostInput = "PostInput",
}

export enum FormType {
  SignIn = "SignIn",
  SignUp = "SignUp",
  Post = "Post",
}

export interface CustomInputEvent {
  target: {
    name: string;
    value: string;
  };
}

export type FormInputChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | CustomInputEvent;

export enum FormTypeQuery {
  signIn = "signIn",
  signUp = "signUp",
}
