import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { emojis, formDetails } from "@/constants";
import Skeleton from "../ui/Skeleton";
import PostInput from "../ui/PostInput";
import {
  FieldType,
  FormInputChangeEvent,
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

type FormObjectType = Record<string, FormObjType>;

interface FormProps {
  formObj: FormObjectType;
  formType: FormType;
  handleSubmit: (obj: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = ({ handleSubmit, formObj, formType }) => {
  const { buttonText, buttonClassName } = formDetails[formType];
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});

  const setInitialValues = (formObj: FormObjectType) => {
    let newFormData = JSON.parse(JSON.stringify(formObj));
    let newFieldValues: Record<string, string> = {};
    Object.keys(newFormData).forEach((inputField) => {
      if (newFormData[inputField]?.iconInput) {
        newFieldValues[getIconName(inputField)] = emojis[0];
      }
      newFieldValues[inputField] = "";
    });
    setFieldValues(newFieldValues);
  };

  useEffect(() => {
    if (formObj) {
      setInitialValues(formObj);
    }
  }, [formObj]);

  const handleChange = (event: FormInputChangeEvent) => {
    const { name, value } = event.target;
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const handleSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("fieldValues", fieldValues);
    handleSubmit(fieldValues);
    setInitialValues(formObj);
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

export default Form;
