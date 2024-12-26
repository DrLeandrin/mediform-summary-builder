import React from "react";
import FormRadioGroup from "./FormRadioGroup";
import { FormData } from "@/lib/types";

interface AvaliacaoGeralProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const AvaliacaoGeral: React.FC<AvaliacaoGeralProps> = ({ formData, onChange }) => {
  const handleRadioChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormRadioGroup
        name="estadoGeral"
        options={[
          "Bom estado geral",
          "Regular estado geral",
          "Mau estado geral"
        ]}
        value={formData.estadoGeral}
        label="Estado Geral"
        onChange={(value) => handleRadioChange("estadoGeral", value)}
      />

      <FormRadioGroup
        name="consciencia"
        options={[
          "Lúcido e orientado",
          "Desorientado em tempo",
          "Desorientado em espaço",
          "Desorientado em tempo e espaço",
          "Sonolento",
          "Torporoso",
          "Comatoso"
        ]}
        value={formData.consciencia}
        label="Nível de Consciência e Orientação"
        onChange={(value) => handleRadioChange("consciencia", value)}
      />

      <FormRadioGroup
        name="temperatura"
        options={[
          "Normotermico",
          "Hipotermico",
          "Febrio"
        ]}
        value={formData.temperatura}
        label="Temperatura"
        onChange={(value) => handleRadioChange("temperatura", value)}
      />
    </div>
  );
};

export default AvaliacaoGeral;
