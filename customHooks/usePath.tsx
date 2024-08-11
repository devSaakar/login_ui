import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

const usePath = () => {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return { createQueryString };
};

export default usePath;
