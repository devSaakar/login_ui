import React, { MouseEventHandler } from "react";

interface ToogleEyeIconProps {
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
}

const ToogleEyeIcon: React.FC<ToogleEyeIconProps> = ({
  isPasswordVisible,
  togglePasswordVisibility,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    togglePasswordVisibility();
  };
  return (
    <button onClick={handleClick}  aria-label="See Password">
      <svg
        className="shrink-0 size-2.8"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7F8084"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isPasswordVisible ? (
          <>
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </>
        ) : (
          <>
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
            <line x1="2" x2="22" y1="2" y2="22"></line>
          </>
        )}
      </svg>
    </button>
  );
};

export default ToogleEyeIcon;
