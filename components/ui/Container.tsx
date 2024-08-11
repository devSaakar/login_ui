import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <div
      id="container"
      className={`
       ${
         className ? className : ""
       } flex-col-center rounded-lg shadow-lg bg-grayCool-1 gap-3
       `}
    >
      {children}
    </div>
  );
};

export default Container;
