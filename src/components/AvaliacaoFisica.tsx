import React from "react";
import FormRadioGroup from "./FormRadioGroup";
import { FormData } from "@/lib/types";

interface AvaliacaoFisicaProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const AvaliacaoFisica: React.FC<AvaliacaoFisicaProps> = ({
  formData,
  onChange,
}) => {
  const handleRadioChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormRadioGroup
        name="perfusaoPeriferica"
        options={[
          "Perfusão periférica normal",
          "Perfusão periférica diminuída",
        ]}
        value={formData.perfusaoPeriferica}
        label="Perfusão Periférica"
        onChange={(value) => handleRadioChange("perfusaoPeriferica", value)}
      />

      <FormRadioGroup
        name="cianose"
        options={[
          "Acianótico",
          "Cianose central",
          "Cianose periférica",
        ]}
        value={formData.cianose}
        label="Cianose"
        onChange={(value) => handleRadioChange("cianose", value)}
      />

      <FormRadioGroup
        name="ictericia"
        options={[
          "Anictérico",
          "Ictérico 1+/4+",
          "Ictérico 2+/4+",
          "Ictérico 3+/4+",
          "Ictérico 4+/4+",
        ]}
        value={formData.ictericia}
        label="Icterícia"
        onChange={(value) => handleRadioChange("ictericia", value)}
      />

      <FormRadioGroup
        name="palidez"
        options={[
          "Corado",
          "Descorado 1+/4+",
          "Descorado 2+/4+",
          "Descorado 3+/4+",
          "Descorado 4+/4+",
        ]}
        value={formData.palidez}
        label="Palidez"
        onChange={(value) => handleRadioChange("palidez", value)}
      />

      <FormRadioGroup
        name="hidratacao"
        options={[
          "Hidratado",
          "Desidratado 1+/4+",
          "Desidratado 2+/4+",
          "Desidratado 3+/4+",
          "Desidratado 4+/4+",
        ]}
        value={formData.hidratacao}
        label="Hidratação"
        onChange={(value) => handleRadioChange("hidratacao", value)}
      />
    </div>
  );
};

export default AvaliacaoFisica;