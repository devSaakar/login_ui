import React from "react";
import Typography from "./ui/Typography";
import { formDetails, FormType } from "@/constants";
import Link from "next/link";

interface FormFotterProps {
  type: FormType;
}

const FormFotter: React.FC<FormFotterProps> = ({ type }) => {
  const { footerText, ctaText, redirectLink } = formDetails[type];
  return (
    <div className="self-start text-center text-gray-400">
      <Typography size="sm" weight="semibold" className="mr-1">
        {footerText}
      </Typography>
      <Link href={redirectLink} className="text-blue-500">
        {ctaText}
      </Link>
    </div>
  );
};

export default FormFotter;
