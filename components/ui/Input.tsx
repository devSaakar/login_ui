import React from "react";
import Typography from "./Typography";
import { InputType } from "@/types/formTypes.type";

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
      <input
        name={name}
        type={type}
        id={id}
        className={`w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none  ${
          error ? "border-red-500" : "focus:border-blue-500"
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
