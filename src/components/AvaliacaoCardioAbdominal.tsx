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
          "Bulhas hipofonéticas"
        ]}
        value={formData.auscultaCardiaca}
        label="Ausculta Cardíaca"
        onChange={(value) => handleRadioChange("auscultaCardiaca", value)}
      />

      <FormRadioGroup
        name="abdomeInspecao"
        options={[
          "Abdome Plano",
          "Abdome Globoso",
          "Abdome Escavado"
        ]}
        value={formData.abdomeInspecao}
        label="Abdome Inspeção"
        onChange={(value) => handleRadioChange("abdomeInspecao", value)}
      />

      <FormRadioGroup
        name="abdomePalpacao"
        options={[
          "Abdome indolor à palpação",
          "Abdome doloroso à palpação superficial",
          "Abdome doloroso à palpação profunda",
          "Abdome com presença de massa palpável"
        ]}
        value={formData.abdomePalpacao}
        label="Abdome Palpação"
        onChange={(value) => handleRadioChange("abdomePalpacao", value)}
      />

      <FormRadioGroup
        name="abdomeAusculta"
        options={[
          "Ausculta abd: RHA presentes normofônicos",
          "Ausculta abd: RHA hipoativos",
          "Ausculta abd: RHA hiperativos",
          "Ausculta abd: Ausência de RHA"
        ]}
        value={formData.abdomeAusculta}
        label="Abdome Ausculta"
        onChange={(value) => handleRadioChange("abdomeAusculta", value)}
      />
    </div>
  );
};

export default AvaliacaoCardioAbdominal;