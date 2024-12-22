import React from "react";
import { FormData } from "@/lib/types";
import FormRadioGroup from "./FormRadioGroup";
import FormDevicesGroup from "./FormDevicesGroup";
import FormInputGroup from "./FormInputGroup";

interface MedicalFormProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const MedicalForm: React.FC<MedicalFormProps> = ({ formData, onChange }) => {
  const handleRadioChange = (name: keyof FormData, value: string) => {
    onChange({ [name]: value });
  };

  return (
    <form className="space-y-8">
      {/* Primeira linha */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FormRadioGroup
          name="estadoGeral"
          options={[
            "Bom estado geral",
            "Regular estado geral",
            "Mau estado geral"
          ]}
          value={formData.estadoGeral}
          label="Estado Geral"
          onChange={(value) => handleRadioChange("estadoGeral", value)}
        />

        <FormRadioGroup
          name="consciencia"
          options={[
            "Lúcido e orientado",
            "Desorientado em tempo",
            "Desorientado em espaço",
            "Desorientado em tempo e espaço",
            "Sonolento",
            "Torporoso",
            "Comatoso"
          ]}
          value={formData.consciencia}
          label="Nível de Consciência e Orientação"
          onChange={(value) => handleRadioChange("consciencia", value)}
        />

        <FormRadioGroup
          name="palidez"
          options={[
            "Corado",
            "Descorado 1+/4+",
            "Descorado 2+/4+",
            "Descorado 3+/4+",
            "Descorado 4+/4+"
          ]}
          value={formData.palidez}
          label="Palidez"
          onChange={(value) => handleRadioChange("palidez", value)}
        />

        <FormRadioGroup
          name="hidratacao"
          options={[
            "Hidratado",
            "Desidratado 1+/4+",
            "Desidratado 2+/4+",
            "Desidratado 3+/4+",
            "Desidratado 4+/4+"
          ]}
          value={formData.hidratacao}
          label="Hidratação"
          onChange={(value) => handleRadioChange("hidratacao", value)}
        />

        <FormRadioGroup
          name="cianose"
          options={[
            "Acianótico",
            "Cianose central",
            "Cianose periférica"
          ]}
          value={formData.cianose}
          label="Cianose"
          onChange={(value) => handleRadioChange("cianose", value)}
        />

        <FormRadioGroup
          name="ictericia"
          options={[
            "Anictérico",
            "Ictérico 1+/4+",
            "Ictérico 2+/4+",
            "Ictérico 3+/4+",
            "Ictérico 4+/4+"
          ]}
          value={formData.ictericia}
          label="Icterícia"
          onChange={(value) => handleRadioChange("ictericia", value)}
        />

        <FormRadioGroup
          name="temperatura"
          options={[
            "Normotermia",
            "Hipotermia",
            "Febre"
          ]}
          value={formData.temperatura}
          label="Temperatura"
          onChange={(value) => handleRadioChange("temperatura", value)}
        />

        <FormRadioGroup
          name="contato"
          options={[
            "Contactuante",
            "Não contactuante"
          ]}
          value={formData.contato}
          label="Contato"
          onChange={(value) => handleRadioChange("contato", value)}
        />

        <FormRadioGroup
          name="colaboracao"
          options={[
            "Colaborativo",
            "Parcialmente colaborativo",
            "Não colaborativo"
          ]}
          value={formData.colaboracao}
          label="Colaboração"
          onChange={(value) => handleRadioChange("colaboracao", value)}
        />

        <FormRadioGroup
          name="fala"
          options={[
            "Fala Clara e compreensível",
            "Disártrico",
            "Afásico"
          ]}
          value={formData.fala}
          label="Fala"
          onChange={(value) => handleRadioChange("fala", value)}
        />

        <FormRadioGroup
          name="pensamento"
          options={[
            "Pensamento Lógico e coerente",
            "Pensamento desorganizado",
            "Ideias delirantes",
            "Ideação suicida"
          ]}
          value={formData.pensamento}
          label="Pensamento"
          onChange={(value) => handleRadioChange("pensamento", value)}
        />

        <FormRadioGroup
          name="humorAfeto"
          options={[
            "Eutímico",
            "Depressivo",
            "Ansioso",
            "Irritável",
            "Apático",
            "Labilidade emocional"
          ]}
          value={formData.humorAfeto}
          label="Humor e Afeto"
          onChange={(value) => handleRadioChange("humorAfeto", value)}
        />

        <FormRadioGroup
          name="perfusaoPeriferica"
          options={[
            "Perfusão periférica normal",
            "Perfusão periférica diminuída"
          ]}
          value={formData.perfusaoPeriferica}
          label="Perfusão Periférica"
          onChange={(value) => handleRadioChange("perfusaoPeriferica", value)}
        />

        <FormRadioGroup
          name="acompanhante"
          options={[
            "Com acompanhante",
            "Sem acompanhante"
          ]}
          value={formData.acompanhante}
          label="Acompanhante"
          onChange={(value) => handleRadioChange("acompanhante", value)}
        />
      </div>

      {/* Dispositivos */}
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

      {/* Sinais Vitais */}
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

      {/* Laboratoriais */}
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
