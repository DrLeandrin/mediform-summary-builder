import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/lib/types";

interface PatientInfoSectionProps {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

const PatientInfoSection: React.FC<PatientInfoSectionProps> = ({
  formData,
  onInputChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="pacienteNome" className="text-xl font-semibold text-foreground">
          Nome do Paciente (Referência)
        </Label>
        <Input
          id="pacienteNome"
          value={formData.pacienteNome}
          onChange={(e) => onInputChange("pacienteNome", e.target.value)}
          placeholder="Digite o nome do paciente..."
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="queixas" className="text-xl font-semibold text-foreground">
          Queixas
        </Label>
        <Textarea
          id="queixas"
          value={formData.queixas}
          onChange={(e) => onInputChange("queixas", e.target.value)}
          placeholder="Digite as queixas do paciente..."
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PatientInfoSection;