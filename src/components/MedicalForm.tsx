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

interface MedicalFormProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const MedicalForm: React.FC<MedicalFormProps> = ({ formData, onChange }) => {
  return (
    <form className="space-y-8">
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
      />
    </form>
  );
};

export default MedicalForm;