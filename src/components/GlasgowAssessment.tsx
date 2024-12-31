import React, { memo } from "react";
import FormRadioGroup from "./FormRadioGroup";
import { FormData } from "@/lib/types";

interface GlasgowAssessmentProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const GlasgowAssessment: React.FC<GlasgowAssessmentProps> = ({ formData, onChange }) => {
  const handleRadioChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <div className="p-4 rounded-lg border bg-card text-card-foreground">
      <h3 className="text-center font-bold uppercase mb-4">Escala de Glasgow</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormRadioGroup
          name="glasgowOcular"
          options={[
            "Espontanea - 4 pts",
            "Ao Chamado - 3 pts",
            "À dor - 2 pts",
            "Ausente - 1 pt"
          ]}
          value={formData.glasgowOcular}
          label="A - Abertura Ocular"
          onChange={(value) => handleRadioChange("glasgowOcular", value)}
        />

        <FormRadioGroup
          name="glasgowVerbal"
          options={[
            "Orientado - 5 pts",
            "Confuso - 4 pts",
            "Palavras - 3 pts",
            "Sons - 2 pts",
            "Ausente - 1 pt"
          ]}
          value={formData.glasgowVerbal}
          label="B - Resposta Verbal"
          onChange={(value) => handleRadioChange("glasgowVerbal", value)}
        />

        <FormRadioGroup
          name="glasgowMotora"
          options={[
            "Obedece - 6 pts",
            "Localiza - 5 pts",
            "Flete - 4 pts",
            "Flexão Anormal - 3 pts",
            "Extensão - 2 pts",
            "Ausente - 1 pt"
          ]}
          value={formData.glasgowMotora}
          label="C - Resposta Motora"
          onChange={(value) => handleRadioChange("glasgowMotora", value)}
        />
      </div>
    </div>
  );
};

export default memo(GlasgowAssessment);