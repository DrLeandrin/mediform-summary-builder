import React from "react";
import { FormData } from "@/lib/types";
import EstadoNutricionalGroup from "./necessidades/EstadoNutricionalGroup";
import MobilidadeGroup from "./necessidades/MobilidadeGroup";
import AceitacaoDietaGroup from "./necessidades/AceitacaoDietaGroup";
import SonoGroup from "./necessidades/SonoGroup";
import UrinaGroup from "./necessidades/UrinaGroup";
import HabitoIntestinalGroup from "./necessidades/HabitoIntestinalGroup";
import IntercorrenciasGroup from "./necessidades/IntercorrenciasGroup";
import AcompanhanteGroup from "./necessidades/AcompanhanteGroup";

interface AvaliacaoNecessidadesProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const AvaliacaoNecessidades: React.FC<AvaliacaoNecessidadesProps> = ({
  formData,
  onChange,
}) => {
  const handleChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <EstadoNutricionalGroup
        value={formData.estadoNutricional}
        onChange={(value) => handleChange("estadoNutricional", value)}
      />

      <MobilidadeGroup
        value={formData.mobilidade}
        onChange={(value) => handleChange("mobilidade", value)}
      />

      <AceitacaoDietaGroup
        value={formData.aceitacaoDieta}
        onChange={(value) => handleChange("aceitacaoDieta", value)}
      />

      <SonoGroup
        value={formData.sono}
        onChange={(value) => handleChange("sono", value)}
      />

      <UrinaGroup
        value={formData.urina}
        onChange={(value) => handleChange("urina", value)}
      />

      <HabitoIntestinalGroup
        value={formData.habitoIntestinal}
        onChange={(value) => handleChange("habitoIntestinal", value)}
      />

      <IntercorrenciasGroup
        value={formData.intercorrencias}
        onChange={(value) => handleChange("intercorrencias", value)}
      />

      <AcompanhanteGroup
        value={formData.acompanhante}
        onChange={(value) => handleChange("acompanhante", value)}
      />
    </div>
  );
};

export default AvaliacaoNecessidades;