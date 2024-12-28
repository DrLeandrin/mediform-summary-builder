import React from "react";
import FormRadioGroup from "./FormRadioGroup";
import { FormData } from "@/lib/types";
import { Textarea } from "./ui/textarea";

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

  const handleCustomIntercorrenciasChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ intercorrencias: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormRadioGroup
        name="estadoNutricional"
        options={[
          "Eutrófico",
          "Sobrepeso",
          "Obesidade",
          "Magreza leve",
          "Magreza severa"
        ]}
        value={formData.estadoNutricional}
        label="Estado Nutricional"
        onChange={(value) => handleRadioChange("estadoNutricional", value)}
      />

      <FormRadioGroup
        name="mobilidade"
        options={[
          "Deambulando normalmente",
          "Deambulando com dificuldade",
          "Restrito ao leito",
          "Imobilidade completa"
        ]}
        value={formData.mobilidade}
        label="Mobilidade"
        onChange={(value) => handleRadioChange("mobilidade", value)}
      />

      <FormRadioGroup
        name="aceitacaoDieta"
        options={[
          "Boa aceitação da dieta",
          "Não aceitou dieta",
          "Efeitos indesejáveis à diéta"
        ]}
        value={formData.aceitacaoDieta}
        label="Aceitação da Dieta"
        onChange={(value) => handleRadioChange("aceitacaoDieta", value)}
      />

      <FormRadioGroup
        name="sono"
        options={[
          "Nega alterações do sono",
          "Refere não conseguir dormir"
        ]}
        value={formData.sono}
        label="Sono"
        onChange={(value) => handleRadioChange("sono", value)}
      />

      <FormRadioGroup
        name="urina"
        options={[
          "Nega alteração do Hábito Urinário",
          "Refere disuria",
          "Refere oliguria",
          "Refere anuria"
        ]}
        value={formData.urina}
        label="Urina"
        onChange={(value) => handleRadioChange("urina", value)}
      />

      <FormRadioGroup
        name="habitoIntestinal"
        options={[
          "Nega alterações do Hábito intestinal",
          "Não evacuou nas ultimas 24h",
          "Não evacuou nas ultimas 48h",
          "Não evacuou nas ultimas 72h",
          "Refere diarreia."
        ]}
        value={formData.habitoIntestinal}
        label="Hábito Intestinal"
        onChange={(value) => handleRadioChange("habitoIntestinal", value)}
      />

      <div className="p-4 rounded-lg border bg-card text-card-foreground">
        <h3 className="text-center font-bold uppercase mb-4">Intercorrências</h3>
        <div className="space-y-4">
          <FormRadioGroup
            name="intercorrencias"
            options={[
              "Não houveram intercorrências nas ultimas 24h"
            ]}
            value={formData.intercorrencias}
            label=""
            onChange={(value) => handleRadioChange("intercorrencias", value)}
          />
          <div className="mt-2">
            <Textarea
              placeholder="Digite outras intercorrências..."
              value={formData.intercorrencias !== "Não houveram intercorrências nas ultimas 24h" ? formData.intercorrencias : ""}
              onChange={handleCustomIntercorrenciasChange}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <FormRadioGroup
        name="acompanhante"
        options={[
          "Com acompanhante",
          "Sem acompanhante"
        ]}
        value={formData.acompanhante}
        label="Acompanhante"
        onChange={(value) => handleRadioChange("acompanhante", value)}
      />
    </div>
  );
};

export default AvaliacaoNecessidades;