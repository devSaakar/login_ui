import React from "react";

interface DotProps {
  className?: string;
}

const Dot: React.FC<DotProps> = ({ className }) => {
  return <div className={`w-1.5 h-1.5  rounded-full ${className || ""}`}></div>;
};

export default Dot;
