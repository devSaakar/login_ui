import React from "react";

interface TypographyProps {
  size: "xs" | "sm" | "base" | "lg";
  weight?: "normal" | "medium" | "semibold";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  size,
  weight = "normal",
  children,
  className,
}) => {
  const sizeClasses = {
    xs: "text-xs", // 12px
    sm: "text-sm", // 14px
    base: "text-base", // 16px
    lg: "text-lg", // 18px
  };

  const weightClasses = {
    normal: "font-normal", // 400
    medium: "font-medium", // 500
    semibold: "font-semibold", // 600
  };

  return (
    <p
      className={`inline-block ${sizeClasses[size]} ${weightClasses[weight]} ${className} `}
    >
      {children}
    </p>
  );
};

export default Typography;
