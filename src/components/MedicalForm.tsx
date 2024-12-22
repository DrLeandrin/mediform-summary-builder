import React from "react";
import { FormData } from "@/lib/types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

interface MedicalFormProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const MedicalForm: React.FC<MedicalFormProps> = ({ formData, onChange }) => {
  const renderRadioGroup = (
    name: string,
    options: string[],
    value: string,
    label: string
  ) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <RadioGroup
        value={value}
        onValueChange={(value) => onChange({ [name]: value })}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
      >
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`${name}-${option}`} />
            <Label htmlFor={`${name}-${option}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );

  return (
    <form className="space-y-8">
      {/* Primeira linha */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderRadioGroup("estadoGeral", [
          "Bom estado geral",
          "Regular estado geral",
          "Mau estado geral"
        ], formData.estadoGeral, "Estado Geral")}

        {renderRadioGroup("consciencia", [
          "Lúcido e orientado",
          "Desorientado em tempo",
          "Desorientado em espaço",
          "Desorientado em tempo e espaço",
          "Sonolento",
          "Torporoso",
          "Comatoso"
        ], formData.consciencia, "Nível de Consciência e Orientação")}

        {/* Continue com os outros campos... */}
      </div>

      {/* Dispositivos */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Dispositivos</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {[
            "Acesso venoso periférico",
            "Acesso venoso central",
            "PICC",
            "PAI",
            "Acesso arterial periférico",
            "Fistula",
            "Cateter Nasal de O2",
            "MNR O2",
            "SNE",
            "SNG",
            "Colostomia",
            "Nefrostomia",
            "SVD",
            "Traqueostomia",
            "IOT"
          ].map((device) => (
            <div key={device} className="flex items-center space-x-2">
              <Checkbox
                id={device}
                checked={formData.dispositivos.includes(device)}
                onCheckedChange={(checked) => {
                  const newDevices = checked
                    ? [...formData.dispositivos, device]
                    : formData.dispositivos.filter((d) => d !== device);
                  onChange({ dispositivos: newDevices });
                }}
              />
              <Label htmlFor={device}>{device}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Sinais Vitais */}
      <div className="space-y-4">
        <Label className="text-lg font-medium">Sinais Vitais</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(formData.sinaisVitais).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <Label htmlFor={key}>{key.toUpperCase()}</Label>
              <Input
                id={key}
                value={value}
                onChange={(e) =>
                  onChange({
                    sinaisVitais: {
                      ...formData.sinaisVitais,
                      [key]: e.target.value,
                    },
                  })
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Laboratoriais */}
      <div className="space-y-4">
        <Label className="text-lg font-medium">Laboratoriais</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(formData.laboratoriais).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <Label htmlFor={key}>{key.toUpperCase()}</Label>
              <Input
                id={key}
                value={value}
                onChange={(e) =>
                  onChange({
                    laboratoriais: {
                      ...formData.laboratoriais,
                      [key]: e.target.value,
                    },
                  })
                }
              />
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default MedicalForm;