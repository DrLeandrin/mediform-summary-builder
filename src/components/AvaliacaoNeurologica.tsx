import React from "react";
import FormRadioGroup from "./FormRadioGroup";
import { FormData } from "@/lib/types";

interface AvaliacaoNeurologicaProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const AvaliacaoNeurologica: React.FC<AvaliacaoNeurologicaProps> = ({
  formData,
  onChange,
}) => {
  const handleRadioChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormRadioGroup
        name="colaboracao"
        options={[
          "Colaborativo",
          "Parcialmente colaborativo",
          "Não colaborativo"
        ]}
        value={formData.colaboracao}
        label="Colaboração"
        onChange={(value) => handleRadioChange("colaboracao", value)}
      />

      <FormRadioGroup
        name="contato"
        options={[
          "Contactuante",
          "Não contactuante"
        ]}
        value={formData.contato}
        label="Contato"
        onChange={(value) => handleRadioChange("contato", value)}
      />

      <FormRadioGroup
        name="fala"
        options={[
          "Fala Clara e compreensível",
          "Disártrico",
          "Afásico"
        ]}
        value={formData.fala}
        label="Fala"
        onChange={(value) => handleRadioChange("fala", value)}
      />

      <FormRadioGroup
        name="pensamento"
        options={[
          "Pensamento Lógico e coerente",
          "Pensamento desorganizado",
          "Ideias delirantes",
          "Ideação suicida"
        ]}
        value={formData.pensamento}
        label="Pensamento"
        onChange={(value) => handleRadioChange("pensamento", value)}
      />

      <FormRadioGroup
        name="humorAfeto"
        options={[
          "Eutímico",
          "Depressivo",
          "Ansioso",
          "Irritável",
          "Apático",
          "Labilidade emocional"
        ]}
        value={formData.humorAfeto}
        label="Humor e Afeto"
        onChange={(value) => handleRadioChange("humorAfeto", value)}
      />

      <FormRadioGroup
        name="aceitacaoMedicamentos"
        options={[
          "Boa aceitação Medicamentosa",
          "Negou Medicações",
          "Efeitos indesejáveis à medicação"
        ]}
        value={formData.aceitacaoMedicamentos}
        label="Aceitação Medicamentos"
        onChange={(value) => handleRadioChange("aceitacaoMedicamentos", value)}
      />
    </div>
  );
};

export default AvaliacaoNeurologica;