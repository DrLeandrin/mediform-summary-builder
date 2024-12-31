import React from "react";
import FormRadioGroup from "../FormRadioGroup";
import { FormData } from "@/lib/types";

interface UrinaGroupProps {
  value: string;
  onChange: (value: string) => void;
}

const UrinaGroup: React.FC<UrinaGroupProps> = ({
  value,
  onChange,
}) => {
  return (
    <FormRadioGroup
      name="urina"
      options={[
        "Nega alteração do Hábito Urinário",
        "Refere disuria",
        "Refere oliguria",
        "Refere anuria",
        "SVD pervia com débito em reservatório"
      ]}
      value={value}
      label="Urina"
      onChange={onChange}
    />
  );
};

export default UrinaGroup;