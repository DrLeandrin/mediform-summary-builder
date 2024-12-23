import React from "react";
import FormRadioGroup from "./FormRadioGroup";
import { FormData } from "@/lib/types";

interface AvaliacaoNecessidadesProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const AvaliacaoNecessidades: React.FC<AvaliacaoNecessidadesProps> = ({
  formData,
  onChange,
}) => {
  const handleRadioChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormRadioGroup
        name="estadoNutricional"
        options={[
          "Eutrófico",
          "Desnutrido",
          "Sobrepeso",
          "Obeso",
        ]}
        value={formData.estadoNutricional}
        label="Estado Nutricional"
        onChange={(value) => handleRadioChange("estadoNutricional", value)}
      />

      <FormRadioGroup
        name="mobilidade"
        options={[
          "Deambula",
          "Deambula com auxílio",
          "Acamado",
          "Restrito ao leito",
        ]}
        value={formData.mobilidade}
        label="Mobilidade"
        onChange={(value) => handleRadioChange("mobilidade", value)}
      />

      <FormRadioGroup
        name="aceitacaoDieta"
        options={[
          "Boa aceitação",
          "Regular aceitação",
          "Baixa aceitação",
          "Não se alimenta",
        ]}
        value={formData.aceitacaoDieta}
        label="Aceitação da Dieta"
        onChange={(value) => handleRadioChange("aceitacaoDieta", value)}
      />

      <FormRadioGroup
        name="sono"
        options={[
          "Sono preservado",
          "Insônia inicial",
          "Insônia terminal",
          "Sono fragmentado",
        ]}
        value={formData.sono}
        label="Sono"
        onChange={(value) => handleRadioChange("sono", value)}
      />

      <FormRadioGroup
        name="urina"
        options={[
          "Diurese presente",
          "Oligúria",
          "Anúria",
          "Poliúria",
        ]}
        value={formData.urina}
        label="Urina"
        onChange={(value) => handleRadioChange("urina", value)}
      />

      <FormRadioGroup
        name="habitoIntestinal"
        options={[
          "Regular",
          "Constipação",
          "Diarreia",
        ]}
        value={formData.habitoIntestinal}
        label="Hábito Intestinal"
        onChange={(value) => handleRadioChange("habitoIntestinal", value)}
      />
    </div>
  );
};

export default AvaliacaoNecessidades;