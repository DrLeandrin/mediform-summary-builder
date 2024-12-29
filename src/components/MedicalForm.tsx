import React from "react";
import { FormData } from "@/lib/types";
import FormDevicesGroup from "./FormDevicesGroup";
import FormInputGroup from "./FormInputGroup";
import AvaliacaoGeral from "./AvaliacaoGeral";
import AvaliacaoRespiratoria from "./AvaliacaoRespiratoria";
import AvaliacaoCardioAbdominal from "./AvaliacaoCardioAbdominal";
import AvaliacaoNeurologica from "./AvaliacaoNeurologica";
import AvaliacaoFisica from "./AvaliacaoFisica";
import AvaliacaoNecessidades from "./AvaliacaoNecessidades";
import { Textarea } from "./ui/textarea";

interface MedicalFormProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const MedicalForm: React.FC<MedicalFormProps> = ({ formData, onChange }) => {
  const handleRemoveLaboratorial = (key: string) => {
    const newLaboratoriais = { ...formData.laboratoriais };
    delete newLaboratoriais[key];
    onChange({ laboratoriais: newLaboratoriais });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Queixas</h2>
        <Textarea
          value={formData.queixas}
          onChange={(e) => onChange({ queixas: e.target.value })}
          placeholder="Digite as queixas do paciente..."
          className="w-full"
        />
      </div>

      <AvaliacaoGeral formData={formData} onChange={onChange} />
      <AvaliacaoRespiratoria formData={formData} onChange={onChange} />
      <AvaliacaoCardioAbdominal formData={formData} onChange={onChange} />
      <AvaliacaoNeurologica formData={formData} onChange={onChange} />
      <AvaliacaoFisica formData={formData} onChange={onChange} />
      <AvaliacaoNecessidades formData={formData} onChange={onChange} />

      <FormDevicesGroup
        devices={[
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
        ]}
        selectedDevices={formData.dispositivos}
        onChange={(devices) => onChange({ dispositivos: devices })}
      />

      <FormInputGroup
        title="Sinais Vitais"
        fields={formData.sinaisVitais}
        onChange={(key, value) =>
          onChange({
            sinaisVitais: {
              ...formData.sinaisVitais,
              [key]: value,
            },
          })
        }
      />

      <FormInputGroup
        title="Laboratoriais"
        fields={formData.laboratoriais}
        onChange={(key, value) =>
          onChange({
            laboratoriais: {
              ...formData.laboratoriais,
              [key]: value,
            },
          })
        }
        onRemove={handleRemoveLaboratorial}
        allowCustomFields={true}
      />
    </form>
  );
};

export default MedicalForm;