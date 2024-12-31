import React from "react";
import FormRadioGroup from "../FormRadioGroup";
import { FormData } from "@/lib/types";

interface SonoGroupProps {
  value: string;
  onChange: (value: string) => void;
}

const SonoGroup: React.FC<SonoGroupProps> = ({
  value,
  onChange,
}) => {
  return (
    <FormRadioGroup
      name="sono"
      options={[
        "Nega alterações do sono",
        "Refere não conseguir dormir",
        "sono fragmentado"
      ]}
      value={value}
      label="Sono"
      onChange={onChange}
    />
  );
};

export default SonoGroup;