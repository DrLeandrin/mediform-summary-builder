import React from "react";
import FormRadioGroup from "../FormRadioGroup";
import { FormData } from "@/lib/types";

interface AcompanhanteGroupProps {
  value: string;
  onChange: (value: string) => void;
}

const AcompanhanteGroup: React.FC<AcompanhanteGroupProps> = ({
  value,
  onChange,
}) => {
  return (
    <FormRadioGroup
      name="acompanhante"
      options={[
        "Com acompanhante",
        "Sem acompanhante"
      ]}
      value={value}
      label="Acompanhante"
      onChange={onChange}
    />
  );
};

export default AcompanhanteGroup;