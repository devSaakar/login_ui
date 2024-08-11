import React, { Dispatch, SetStateAction } from "react";
import Typography from "./ui/Typography";
import Image from "next/image";
import CrossIcon from "@/public/icons/cross.svg";

interface FormHeaderProps {
  title: string;
  subtitle: string;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
}

const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  subtitle,
  setShowModal,
}) => {
  return (
    <div
      id="form_header"
      className="w-full flex-col-center gap-2 mb-4 relative"
    >
      {setShowModal && (
        <div
          onClick={(e) => {
            setShowModal(false);
          }}
          className="absolute -right-4 -top-4 cursor-pointer p-2 rounded-full bg-black"
        >
          <Image height={16} width={16} src={CrossIcon} alt="cross icon" />
        </div>
      )}
      <Typography size="sm" weight="medium" className="text-grayCool-2">
        {title}
      </Typography>

      <Typography size="lg" weight="semibold" className="text-white leading-5	">
        {subtitle}
      </Typography>
    </div>
  );
};

export default FormHeader;
