import React from "react";
import FormInputGroup from "../FormInputGroup";
import { FormData } from "@/lib/types";

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
  return (
    <>
      <FormInputGroup
        title="Sinais Vitais"
        fields={formData.sinaisVitais}
        onChange={onSinaisVitaisChange}
      />

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