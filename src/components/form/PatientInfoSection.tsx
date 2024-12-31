import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/lib/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PatientInfoSectionProps {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

const PatientInfoSection: React.FC<PatientInfoSectionProps> = ({
  formData,
  onInputChange,
}) => {
  const handleQueixasChange = (value: string) => {
    if (value === "sem queixas") {
      onInputChange("queixas", value);
    }
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

      <div className="space-y-2">
        <Label className="text-xl font-semibold text-foreground">
          Queixas
        </Label>
        <RadioGroup
          value={formData.queixas === "sem queixas" ? "sem queixas" : ""}
          onValueChange={handleQueixasChange}
          className="mb-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sem queixas" id="sem-queixas" />
            <Label htmlFor="sem-queixas">Sem queixas</Label>
          </div>
        </RadioGroup>
        <Textarea
          value={formData.queixas !== "sem queixas" ? formData.queixas : ""}
          onChange={(e) => onInputChange("queixas", `queixas: ${e.target.value}`)}
          placeholder="Digite as queixas do paciente..."
          className="w-full"
          disabled={formData.queixas === "sem queixas"}
        />
      </div>
    </div>
  );
};

export default PatientInfoSection;