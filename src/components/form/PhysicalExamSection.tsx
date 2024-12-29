import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/lib/types";

interface PhysicalExamSectionProps {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

const PhysicalExamSection: React.FC<PhysicalExamSectionProps> = ({
  formData,
  onInputChange,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Exame Físico Focado</h2>
      <Textarea
        value={formData.exameFisicoFocado}
        onChange={(e) => onInputChange("exameFisicoFocado", e.target.value)}
        placeholder="Digite o exame físico focado..."
        className="w-full"
      />
    </div>
  );
};

export default PhysicalExamSection;