import React from "react";
import FormInputGroup from "../FormInputGroup";
import { FormData } from "@/lib/types";

interface GasometriaSectionProps {
  formData: FormData;
  onGasometriaChange: (key: string, value: string) => void;
  onRemoveGasometria: (key: string) => void;
}

const GasometriaSection: React.FC<GasometriaSectionProps> = ({
  formData,
  onGasometriaChange,
  onRemoveGasometria,
}) => {
  return (
    <FormInputGroup
      title="Gasometria"
      fields={formData.gasometria}
      onChange={onGasometriaChange}
      onRemove={onRemoveGasometria}
      allowCustomFields={true}
    />
  );
};

export default GasometriaSection;