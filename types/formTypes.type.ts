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
