import React from "react";
import FormRadioGroup from "./FormRadioGroup";
import { FormData } from "@/lib/types";

interface AvaliacaoCardioAbdominalProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const AvaliacaoCardioAbdominal: React.FC<AvaliacaoCardioAbdominalProps> = ({
  formData,
  onChange,
}) => {
  const handleRadioChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormRadioGroup
        name="auscultaCardiaca"
        options={[
          "2 bulhas rítmicas normofonéticas, sem sopro",
          "2 bulhas arrítmicas",
          "Bulhas hipofonéticas",
          "ausência de bulhas audíveis"
        ]}
        value={formData.auscultaCardiaca}
        label="Ausculta Cardíaca"
        onChange={(value) => handleRadioChange("auscultaCardiaca", value)}
      />

      <FormRadioGroup
        name="abdomeInspecao"
        options={[
          "Plano",
          "Globoso",
          "Escavado",
          "em avental"
        ]}
        value={formData.abdomeInspecao}
        label="Abdome Inspeção"
        onChange={(value) => handleRadioChange("abdomeInspecao", value)}
      />

      <FormRadioGroup
        name="abdomePalpacao"
        options={[
          "indolor à palpação",
          "doloroso à palpação superficial",
          "doloroso à palpação profunda",
          "presença de massa palpável"
        ]}
        value={formData.abdomePalpacao}
        label="Abdome Palpação"
        onChange={(value) => handleRadioChange("abdomePalpacao", value)}
      />

      <FormRadioGroup
        name="abdomeAusculta"
        options={[
          "RHA presentes normofônicos",
          "RHA hipoativos",
          "RHA hiperativos",
          "Ausência de RHA"
        ]}
        value={formData.abdomeAusculta}
        label="Abdome Ausculta"
        onChange={(value) => handleRadioChange("abdomeAusculta", value)}
      />
    </div>
  );
};

export default AvaliacaoCardioAbdominal;