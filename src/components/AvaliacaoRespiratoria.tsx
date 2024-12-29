import React, { memo } from "react";
import FormRadioGroup from "./FormRadioGroup";
import { FormData } from "@/lib/types";

interface AvaliacaoRespiratoriaProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const AvaliacaoRespiratoria: React.FC<AvaliacaoRespiratoriaProps> = ({
  formData,
  onChange,
}) => {
  const handleRadioChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormRadioGroup
        name="freqRespiratoria"
        options={[
          "Eupneico",
          "Taquipneico",
          "Bradipneico"
        ]}
        value={formData.freqRespiratoria}
        label="Frequência Respiratória"
        onChange={(value) => handleRadioChange("freqRespiratoria", value)}
      />

      <FormRadioGroup
        name="torax"
        options={[
          "Tórax simétrico",
          "Tórax assimétrico",
          "Tiragem intercostal",
          "Uso de musculatura acessória"
        ]}
        value={formData.torax}
        label="Tórax"
        onChange={(value) => handleRadioChange("torax", value)}
      />

      <FormRadioGroup
        name="auscultaPulmonar"
        options={[
          "Murmúrio vesicular presente bilateralmente sem ruídos adventícios",
          "Murmúrio vesicular diminuído",
          "Roncos",
          "Sibilos",
          "Estertores finos",
          "Estertores grossos",
          "Ausência de murmúrio vesicular"
        ]}
        value={formData.auscultaPulmonar}
        label="Ausculta Pulmonar"
        onChange={(value) => handleRadioChange("auscultaPulmonar", value)}
      />
    </div>
  );
};

export default memo(AvaliacaoRespiratoria);