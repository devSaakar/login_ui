import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <div
      id="container"
      className={`flex-col-center p-8 rounded-lg shadow-lg bg-grayCool-1 gap-3
       ${className ? className : ""}
       `}
    >
      {children}
    </div>
  );
};

export default Container;
