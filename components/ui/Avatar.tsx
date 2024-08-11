import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  className,
  height,
  width,
}) => {
  return (
    <Image
      className={`inline-flex w-10 h-10 rounded-full ${className || ""}`}
      src={src}
      alt={alt || src}
      width={width}
      height={height}
    />
  );
};

export default Avatar;
