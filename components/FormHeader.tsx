import React from "react";
import Typography from "./ui/Typography";

interface FormHeaderProps {
  title: string;
  subtitle: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle }) => {
  return (
    <div id="form_header" className="flex-col-center gap-2 mb-4">
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
