import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-3 rounded bg-blue-500 text-white hover:bg-blue-600 self-end ${
        className || "w-full"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
