import React from "react";
import FormInputGroup from "../FormInputGroup";
import { FormData } from "@/lib/types";
import VitalSignsSection from "./VitalSignsSection";

interface VitalsAndLabsSectionProps {
  formData: FormData;
  onSinaisVitaisChange: (key: string, value: string) => void;
  onLaboratoriaisChange: (key: string, value: string) => void;
  onRemoveLaboratorial: (key: string) => void;
}

const VitalsAndLabsSection: React.FC<VitalsAndLabsSectionProps> = ({
  formData,
  onSinaisVitaisChange,
  onLaboratoriaisChange,
  onRemoveLaboratorial,
}) => {
  const getSliderConfig = (key: string) => {
    const configs: Record<string, { min: number; max: number; step: number; label: string }> = {
      fr: { min: 8, max: 50, step: 1, label: "Frequência Respiratória" },
      fc: { min: 40, max: 200, step: 1, label: "Frequência Cardíaca" },
      sato2: { min: 60, max: 100, step: 1, label: "Saturação O2" },
      pas: { min: 60, max: 250, step: 1, label: "Pressão Arterial Sistólica" },
      pad: { min: 10, max: 140, step: 1, label: "Pressão Arterial Diastólica" },
      dextro: { min: 40, max: 500, step: 1, label: "Dextro" },
      temperatura: { min: 34, max: 42, step: 0.1, label: "Temperatura" }
    };
    return configs[key] || null;
  };

  const isVitalSign = (key: string) => {
    return ['fr', 'fc', 'sato2', 'pas', 'pad', 'dextro', 'temperatura'].includes(key.toLowerCase());
  };

  return (
    <>
      <div className="space-y-4 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
        <h3 className="text-lg font-semibold">Sinais Vitais</h3>
        <VitalSignsSection
          fields={formData.sinaisVitais}
          onChange={onSinaisVitaisChange}
          getSliderConfig={getSliderConfig}
          isVitalSign={isVitalSign}
        />
      </div>

      <FormInputGroup
        title="Laboratoriais"
        fields={formData.laboratoriais}
        onChange={onLaboratoriaisChange}
        onRemove={onRemoveLaboratorial}
        allowCustomFields={true}
      />
    </>
  );
};

export default VitalsAndLabsSection;