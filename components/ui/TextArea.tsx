import React from "react";
import Typography from "./Typography";

interface TextAreaProps {
  name: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  label: string;
  showIcon?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  id,
  value,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-gray-400 mb-2">
        <Typography size="sm" weight="semibold" className="text-grayCool-3">
          {label}
        </Typography>
      </label>
      <textarea
        rows={3}
        cols={50}
        name={name}
        id={id}
        className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
