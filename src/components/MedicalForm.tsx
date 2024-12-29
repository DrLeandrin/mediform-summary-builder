import React, { useCallback } from "react";
import { FormData } from "@/lib/types";
import FormDevicesGroup from "./FormDevicesGroup";
import AvaliacaoGeral from "./AvaliacaoGeral";
import AvaliacaoRespiratoria from "./AvaliacaoRespiratoria";
import AvaliacaoCardioAbdominal from "./AvaliacaoCardioAbdominal";
import AvaliacaoNeurologica from "./AvaliacaoNeurologica";
import AvaliacaoFisica from "./AvaliacaoFisica";
import AvaliacaoNecessidades from "./AvaliacaoNecessidades";
import PatientInfoSection from "./form/PatientInfoSection";
import PhysicalExamSection from "./form/PhysicalExamSection";
import VitalsAndLabsSection from "./form/VitalsAndLabsSection";

interface MedicalFormProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const MedicalForm: React.FC<MedicalFormProps> = ({ formData, onChange }) => {
  const handleRemoveLaboratorial = useCallback((key: string) => {
    const newLaboratoriais = { ...formData.laboratoriais };
    delete newLaboratoriais[key];
    onChange({ laboratoriais: newLaboratoriais });
  }, [formData.laboratoriais, onChange]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    onChange({ [field]: value });
  }, [onChange]);

  const handleSinaisVitaisChange = useCallback((key: string, value: string) => {
    onChange({
      sinaisVitais: {
        ...formData.sinaisVitais,
        [key]: value,
      },
    });
  }, [formData.sinaisVitais, onChange]);

  const handleLaboratoriaisChange = useCallback((key: string, value: string) => {
    onChange({
      laboratoriais: {
        ...formData.laboratoriais,
        [key]: value,
      },
    });
  }, [formData.laboratoriais, onChange]);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <PatientInfoSection 
        formData={formData} 
        onInputChange={handleInputChange} 
      />

      <AvaliacaoGeral formData={formData} onChange={onChange} />
      <AvaliacaoRespiratoria formData={formData} onChange={onChange} />
      <AvaliacaoCardioAbdominal formData={formData} onChange={onChange} />
      <AvaliacaoNeurologica formData={formData} onChange={onChange} />
      <AvaliacaoFisica formData={formData} onChange={onChange} />
      <AvaliacaoNecessidades formData={formData} onChange={onChange} />

      <PhysicalExamSection 
        formData={formData} 
        onInputChange={handleInputChange} 
      />

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

      <VitalsAndLabsSection
        formData={formData}
        onSinaisVitaisChange={handleSinaisVitaisChange}
        onLaboratoriaisChange={handleLaboratoriaisChange}
        onRemoveLaboratorial={handleRemoveLaboratorial}
      />
    </form>
  );
};

export default MedicalForm;