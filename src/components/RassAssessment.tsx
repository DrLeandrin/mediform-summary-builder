import React, { memo } from "react";
import FormRadioGroup from "./FormRadioGroup";
import { FormData } from "@/lib/types";

interface RassAssessmentProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const RassAssessment: React.FC<RassAssessmentProps> = ({ formData, onChange }) => {
  const handleRadioChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <div className="p-4 rounded-lg border bg-card text-card-foreground">
      <h3 className="text-center font-bold uppercase mb-4">Escala RASS</h3>
      <FormRadioGroup
        name="rassScale"
        options={[
          "+4: Combativo",
          "+3: Muito agitado",
          "+2: Agitado",
          "+1: Inquieto",
          "0: Alerta e calmo",
          "-1: Sonolento",
          "-2: Sedação leve",
          "-3: Sedação moderada",
          "-4: Sedação profunda",
          "-5: Não responsivo"
        ]}
        value={formData.rassScale}
        label=""
        onChange={(value) => handleRadioChange("rassScale", value)}
      />
    </div>
  );
};

export default memo(RassAssessment);