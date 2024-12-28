import React from "react";
import FormRadioGroup from "../FormRadioGroup";
import { FormData } from "@/lib/types";

interface EstadoNutricionalGroupProps {
  value: string;
  onChange: (value: string) => void;
}

const EstadoNutricionalGroup: React.FC<EstadoNutricionalGroupProps> = ({
  value,
  onChange,
}) => {
  return (
    <FormRadioGroup
      name="estadoNutricional"
      options={[
        "Eutrófico",
        "Sobrepeso",
        "Obesidade",
        "Magreza leve",
        "Magreza severa"
      ]}
      value={value}
      label="Estado Nutricional"
      onChange={onChange}
    />
  );
};

export default EstadoNutricionalGroup;