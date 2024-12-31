import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox";

interface PatientInfoSectionProps {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

const PatientInfoSection: React.FC<PatientInfoSectionProps> = ({
  formData,
  onInputChange,
}) => {
  const handleQueixasChange = (checked: boolean) => {
    if (checked) {
      onInputChange("queixas", "sem queixas");
    } else {
      onInputChange("queixas", "");
    }
  };

  const handleQueixasTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onInputChange("queixas", value ? `queixas: ${value}` : "");
  };

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

      <div className="space-y-2 border border-input rounded-md p-4">
        <Label className="text-xl font-semibold text-foreground">
          Queixas
        </Label>
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox
            id="sem-queixas"
            checked={formData.queixas === "sem queixas"}
            onCheckedChange={handleQueixasChange}
          />
          <Label htmlFor="sem-queixas">Sem queixas</Label>
        </div>
        <Textarea
          value={formData.queixas !== "sem queixas" ? formData.queixas.replace("queixas: ", "") : ""}
          onChange={handleQueixasTextChange}
          placeholder="Digite as queixas do paciente..."
          className="w-full"
          disabled={formData.queixas === "sem queixas"}
        />
      </div>
    </div>
  );
};

export default PatientInfoSection;