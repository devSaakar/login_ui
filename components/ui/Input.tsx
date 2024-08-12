import React, { useState } from "react";
import Typography from "./Typography";
import { InputType } from "@/types/formTypes.type";
import ToogleEyeIcon from "./ToogleEyeIcon";

interface InputProps {
  type: InputType;
  name: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  showExtraComponent?: boolean;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  id,
  value,
  onChange,
  placeholder,
  label,
  showExtraComponent = false,
  error = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    console.log("isPasswordVisible", isPasswordVisible);
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-full">
      <div className="flex-between w-full">
        <label htmlFor={id} className="block text-gray-400 mb-2">
          <Typography size="sm" weight="semibold" className="text-grayCool-3">
            {label}
          </Typography>
        </label>
        {type === InputType.Password && showExtraComponent && (
          <Typography
            size="xs"
            weight="semibold"
            className="text-grayCool-3 cursor-pointer"
          >
            Forgot password?
          </Typography>
        )}
      </div>
      <div className="relative">
        <input
          name={name}
          type={isPasswordVisible ? InputType.Text : type}
          id={id}
          className={`w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none  ${
            error ? "border-red-500" : "border-blue-500"
          }
          ${type === InputType.Password ? "pr-10" : ""}
          `}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {type === InputType.Password && (
          <div className="absolute right-4  top-1/2 transform -translate-y-1/2">
            <ToogleEyeIcon
              isPasswordVisible={isPasswordVisible}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
