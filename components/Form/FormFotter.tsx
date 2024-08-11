import React, { useLayoutEffect, useState } from "react";
import Typography from "../ui/Typography";
import Link from "next/link";
import { FormType, FormTypeQuery } from "@/types/formTypes.type";
import { usePathname, useSearchParams } from "next/navigation";
import usePath from "@/customHooks/usePath";
import formDetails from "@/constants/FormData/formDetails";

interface FormFotterProps {
  type: FormType;
}

const FormFotter: React.FC<FormFotterProps> = ({ type }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString } = usePath();
  const userId = searchParams.get("userId");
  const formType = searchParams.get("formType");
  const { footerText, ctaText, redirectLink, formTypeQuery } =
    formDetails[type];

  const [redirectButtonLink, setRedirectButtonLink] = useState("");

  useLayoutEffect(() => {
    if (formType && formTypeQuery) {
      let query = createQueryString("formType", formTypeQuery);
      setRedirectButtonLink(pathname + "?" + query);
    } else {
      setRedirectButtonLink(redirectLink);
    }
  }, [formType, formTypeQuery]);

  return (
    <div className="self-start text-center text-gray-400">
      <Typography size="sm" weight="semibold" className="mr-1 text-grayCool-2">
        {footerText}
      </Typography>
      <Link href={redirectButtonLink} className="text-blue-500">
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
