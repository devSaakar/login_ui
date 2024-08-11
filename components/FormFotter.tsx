import React from "react";
import Typography from "./ui/Typography";
import { formDetails } from "@/constants";
import Link from "next/link";
import { FormType } from "@/types/formTypes.type";

interface FormFotterProps {
  type: FormType;
}

const FormFotter: React.FC<FormFotterProps> = ({ type }) => {
  const { footerText, ctaText, redirectLink } = formDetails[type];
  return (
    <div className="self-start text-center text-gray-400">
      <Typography size="sm" weight="semibold" className="mr-1 text-grayCool-2">
        {footerText}
      </Typography>
      <Link href={redirectLink} className="text-blue-500">
        <Typography
          size="sm"
          weight="semibold"
          className="mr-1 text-grayCool-3"
        >
          {ctaText}
        </Typography>
      </Link>
    </div>
  );
};

export default FormFotter;
