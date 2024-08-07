import React, { useEffect, useState } from "react";
import Input, { InputType } from "../ui/Input";
import Button from "../ui/Button";
import { formDetails, FormType } from "@/constants";

interface FormObjType {
  type: InputType;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  hide: boolean;
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
  const { buttonText } = formDetails[formType];
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (formObj) {
      let newFormData = JSON.parse(JSON.stringify(formObj));
      let newFieldValues: Record<string, string> = {};
      Object.keys(newFormData).forEach((inputField) => {
        newFieldValues[inputField] = "";
      });
      setFieldValues(newFieldValues);
    }
  }, [formObj]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const handleSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(fieldValues);
  };
  return (
    <form onSubmit={handleSubmitClick} className="w-full flex flex-col gap-3">
      {formObj &&
        Object.keys(formObj)?.map((inputField) => {
          let showExtraComponent = false;
          const { type, placeholder, label, id, hide } = formObj[inputField];
          if (type === InputType.Password && formType === FormType.SignIn) {
            showExtraComponent = true;
          }
          if (hide) return null;
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
            />
          );
        })}
      <Button type="submit">{buttonText}</Button>
    </form>
  );
};

export default UserCredentialsForm;
