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
          "+4: Combativo – Violento, representa perigo imediato para si mesmo ou para a equipe",
          "+3: Muito agitado – Comportamento agressivo ou movimentos descontrolados",
          "+2: Agitado – Movimenta-se frequentemente, não obedece comandos",
          "+1: Inquieto – Ansioso, mas sem comportamentos agressivos",
          "0: Alerta e calmo – Estado normal",
          "-1: Sonolento – Acorda ao chamado, mas não mantém atenção total",
          "-2: Sedação leve – Responde ao estímulo verbal, mas não mantém contato visual",
          "-3: Sedação moderada – Responde ao estímulo verbal ou ao chamado apenas com movimento ou abertura ocular",
          "-4: Sedação profunda – Responde apenas ao estímulo físico (estímulo doloroso leve)",
          "-5: Não responsivo – Não há resposta a estímulos verbais ou físicos"
        ]}
        value={formData.rassScale}
        label="Escala RASS"
        onChange={(value) => handleRadioChange("rassScale", value)}
      />
    </div>
  );
};

export default memo(RassAssessment);