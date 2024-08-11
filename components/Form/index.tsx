import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { emojis } from "@/constants";
import Skeleton from "../ui/Skeleton";
import PostInput from "../ui/PostInput";
import {
  FieldType,
  FormInputChangeEvent,
  FormObjectType,
  FormType,
  InputType,
} from "@/types/formTypes.type";
import { getIconName } from "@/utils/utils";
import formDetails from "@/constants/FormData/formDetails";
import { useToast } from "@/customHooks/useToast";

interface FormProps {
  formObj: FormObjectType;
  formType: FormType;
  handleSubmit: (obj: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = ({ handleSubmit, formObj, formType }) => {
  const { addToast } = useToast();
  const { buttonText, buttonClassName } = formDetails[formType];
  const [errors, setErrors] = useState<Record<string, string>>({});
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
    const newFieldValues = { ...fieldValues, [name]: value };
    setFieldValues(newFieldValues);
    if (name in errors) {
      validateInputFields(newFieldValues);
    }
  };

  const handleSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateInputFields(fieldValues)) {
      handleSubmit(fieldValues);
      setInitialValues(formObj);
    } else {
      addToast("Fill Required Fields", "error");
    }
  };

  const validateInputFields = (fieldValues: Record<string, string>) => {
    const errors: Record<string, string> = {};
    Object.keys(fieldValues).forEach((inputField) => {
      if (formObj[inputField]?.required && !fieldValues[inputField]) {
        errors[inputField] = "This field is required";
      }
    });
    console.log("errors", errors);
    if (Object.keys(errors).length) {
      setErrors(errors);
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmitClick} className="w-full flex flex-col gap-3">
      {Object.keys(fieldValues).length ? (
        Object.keys(formObj)?.map((inputField: string) => {
          const {
            type,
            placeholder,
            label,
            id,
            hide,
            showExtraComponent,
            fieldType,
            showIcon,
          } = formObj[inputField];
          const error = errors[inputField];
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
                  showExtraComponent={showExtraComponent}
                  error={Boolean(error)}
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
