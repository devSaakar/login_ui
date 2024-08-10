import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`animate-pulse h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4 ${
        className || ""
      }`}
    ></div>
  );
};

export default Skeleton;
