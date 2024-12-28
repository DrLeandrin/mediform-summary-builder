import React from "react";
import FormRadioGroup from "../FormRadioGroup";
import { FormData } from "@/lib/types";

interface MobilidadeGroupProps {
  value: string;
  onChange: (value: string) => void;
}

const MobilidadeGroup: React.FC<MobilidadeGroupProps> = ({
  value,
  onChange,
}) => {
  return (
    <FormRadioGroup
      name="mobilidade"
      options={[
        "Deambulando normalmente",
        "Deambulando com dificuldade",
        "Restrito ao leito",
        "Imobilidade completa"
      ]}
      value={value}
      label="Mobilidade"
      onChange={onChange}
    />
  );
};

export default MobilidadeGroup;