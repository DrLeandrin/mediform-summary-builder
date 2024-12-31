import React from "react";
import FormRadioGroup from "../FormRadioGroup";
import { FormData } from "@/lib/types";

interface AceitacaoDietaGroupProps {
  value: string;
  onChange: (value: string) => void;
}

const AceitacaoDietaGroup: React.FC<AceitacaoDietaGroupProps> = ({
  value,
  onChange,
}) => {
  return (
    <FormRadioGroup
      name="aceitacaoDieta"
      options={[
        "Boa aceitação da dieta VO",
        "Boa aceitação da dieta enteral",
        "Não aceitou dieta",
        "Efeitos indesejáveis à diéta"
      ]}
      value={value}
      label="Aceitação da Dieta"
      onChange={onChange}
    />
  );
};

export default AceitacaoDietaGroup;