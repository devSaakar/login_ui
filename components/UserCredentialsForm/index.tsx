import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { emojis, formDetails } from "@/constants";
import Skeleton from "../ui/Skeleton";
import PostInput from "../ui/PostInput";
import {
  CustomInputEvent,
  FieldType,
  FormType,
  InputType,
} from "@/types/formTypes.type";
import { getIconName } from "@/utils/utils";

interface FormObjType {
  fieldType?: FieldType;
  type: InputType;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  hide: boolean;
  showIcon?: boolean;
}

interface UserCredentialsFormProps {
  formObj: Record<string, FormObjType>;
  formType: FormType;
  handleSubmit: (obj: Record<string, string>) => void;
}

const UserCredentialsForm: React.FC<UserCredentialsFormProps> = ({
  handleSubmit,
  formObj,
  formType,
}) => {
  const { buttonText, buttonClassName } = formDetails[formType];
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (formObj) {
      let newFormData = JSON.parse(JSON.stringify(formObj));
      let newFieldValues: Record<string, string> = {};
      Object.keys(newFormData).forEach((inputField) => {
        if (newFormData[inputField]?.iconInput) {
          newFieldValues[getIconName(inputField)] = emojis[1];
        }
        newFieldValues[inputField] = "";
      });
      setFieldValues(newFieldValues);
    }
  }, [formObj]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | CustomInputEvent
  ) => {
    const { name, value } = event.target;
    console.log("name,value", name, value);
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const handleSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(fieldValues);
  };
  return (
    <form onSubmit={handleSubmitClick} className="w-full flex flex-col gap-3">
      {Object.keys(fieldValues).length ? (
        Object.keys(formObj)?.map((inputField: string) => {
          let showExtraComponent = false;
          const { type, placeholder, label, id, hide, showIcon, fieldType } =
            formObj[inputField];
          if (type === InputType.Password && formType === FormType.SignIn) {
            showExtraComponent = true;
          }
          if (hide) return null;

          switch (fieldType) {
            case FieldType.Input:
              return (
                <Input
                  key={id + formType}
                  type={type}
                  id={id}
                  label={label}
                  value={fieldValues[inputField]}
                  name={inputField}
                  onChange={handleChange}
                  placeholder={placeholder}
                  showIcon={showIcon}
                />
              );

            case FieldType.PostInput:
              return (
                <PostInput
                  key={id + formType}
                  id={id}
                  label={label}
                  value={fieldValues[inputField]}
                  name={inputField}
                  onChange={handleChange}
                  placeholder={placeholder}
                  showIcon={showIcon}
                  iconName={getIconName(inputField)}
                  iconValue={fieldValues[getIconName(inputField)]}
                />
              );

            default:
              break;
          }
        })
      ) : (
        <Skeleton className="h-16" />
      )}
      <Button className={buttonClassName} type="submit">
        {buttonText}
      </Button>
    </form>
  );
};

export default UserCredentialsForm;
