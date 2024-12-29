import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface FormMedicalConductGroupProps {
  selectedConduct: string[];
  onChange: (conduct: string[]) => void;
}

const MEDICAL_CONDUCT_OPTIONS = [
  "Solicito de Exames",
  "Libero Prescrição Médica",
  "Monitoramento de Sinais vitais",
  "Cuidados Gerais e Cuidados de Enfermagem",
  "Restante Mantido",
  "Solicito Interconsulta/Avaliação da XXX",
  "Orientações ao Paciente e/ou Familiares",
  "Planejamento de Alta",
  "Alta Hospitalar",
  "Transferência para XXX",
  "Discussão de Caso com XXX"
];

const FormMedicalConductGroup: React.FC<FormMedicalConductGroupProps> = ({
  selectedConduct = [], // Add default empty array
  onChange,
}) => (
  <div className="space-y-2 p-4 border rounded-lg bg-card text-card-foreground">
    <Label className="text-lg font-medium">Conduta Médica</Label>
    <div className="flex flex-col gap-2">
      {MEDICAL_CONDUCT_OPTIONS.map((conduct) => (
        <div key={conduct} className="flex items-center space-x-2">
          <Checkbox
            id={conduct}
            checked={Array.isArray(selectedConduct) && selectedConduct.includes(conduct)}
            onCheckedChange={(checked) => {
              if (!Array.isArray(selectedConduct)) {
                onChange([conduct]);
                return;
              }
              const newConduct = checked
                ? [...selectedConduct, conduct]
                : selectedConduct.filter((d) => d !== conduct);
              onChange(newConduct);
            }}
          />
          <Label htmlFor={conduct} className="text-foreground">{conduct}</Label>
        </div>
      ))}
    </div>
  </div>
);

export default FormMedicalConductGroup;