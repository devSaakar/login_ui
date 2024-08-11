import React from "react";
import Typography from "./Typography";
import EmojiInput from "./EmojiInput";
import { CustomInputEvent } from "@/types/formTypes.type";

interface PostInputProps {
  name: string;
  id: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement> | CustomInputEvent
  ) => void;
  placeholder?: string;
  label: string;
  rows?: number;
  cols?: number;
  showIcon?: boolean;
  iconInput?: boolean;
  iconValue?: string;
  iconName?: string;
}

const PostInput: React.FC<PostInputProps> = ({
  name,
  id,
  value,
  onChange,
  placeholder,
  label,
  iconName = "",
  iconValue = "",
  rows = 1,
  cols = 50,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-gray-400 mb-2">
        <Typography size="lg" weight="semibold" className="text-grayCool-3">
          {label}
        </Typography>
      </label>
      <div className="flex w-full p-3 rounded bg-grayCool-5 text-white border border-gray-600 focus:outline-none focus:border-blue-500">
        <EmojiInput name={iconName} onChange={onChange} value={iconValue} />
        <textarea
          rows={rows}
          cols={cols}
          name={name}
          id={id}
          className="w-full p-3 rounded bg-grayCool-5 text-white border border-none	 focus:outline-none focus:border-none"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default PostInput;
