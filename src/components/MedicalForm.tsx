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
        className="grid grid-cols-1 gap-2"
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

        {renderRadioGroup("palidez", [
          "Corado",
          "Descorado 1+/4+",
          "Descorado 2+/4+",
          "Descorado 3+/4+",
          "Descorado 4+/4+"
        ], formData.palidez, "Palidez")}

        {renderRadioGroup("hidratacao", [
          "Hidratado",
          "Desidratado 1+/4+",
          "Desidratado 2+/4+",
          "Desidratado 3+/4+",
          "Desidratado 4+/4+"
        ], formData.hidratacao, "Hidratação")}

        {renderRadioGroup("cianose", [
          "Acianótico",
          "Cianose central",
          "Cianose periférica"
        ], formData.cianose, "Cianose")}

        {renderRadioGroup("ictericia", [
          "Anictérico",
          "Ictérico 1+/4+",
          "Ictérico 2+/4+",
          "Ictérico 3+/4+",
          "Ictérico 4+/4+"
        ], formData.ictericia, "Icterícia")}

        {renderRadioGroup("temperatura", [
          "Normotermia",
          "Hipotermia",
          "Febre"
        ], formData.temperatura, "Temperatura")}

        {renderRadioGroup("contato", [
          "Contactuante",
          "Não contactuante"
        ], formData.contato, "Contato")}

        {renderRadioGroup("colaboracao", [
          "Colaborativo",
          "Parcialmente colaborativo",
          "Não colaborativo"
        ], formData.colaboracao, "Colaboração")}

        {renderRadioGroup("fala", [
          "Fala Clara e compreensível",
          "Disártrico",
          "Afásico"
        ], formData.fala, "Fala")}

        {renderRadioGroup("pensamento", [
          "Pensamento Lógico e coerente",
          "Pensamento desorganizado",
          "Ideias delirantes",
          "Ideação suicida"
        ], formData.pensamento, "Pensamento")}

        {renderRadioGroup("humorAfeto", [
          "Eutímico",
          "Depressivo",
          "Ansioso",
          "Irritável",
          "Apático",
          "Labilidade emocional"
        ], formData.humorAfeto, "Humor e Afeto")}

        {renderRadioGroup("perfusaoPeriferica", [
          "Perfusão periférica normal",
          "Perfusão periférica diminuída"
        ], formData.perfusaoPeriferica, "Perfusão Periférica")}

        {renderRadioGroup("acompanhante", [
          "Com acompanhante",
          "Sem acompanhante"
        ], formData.acompanhante, "Acompanhante")}
      </div>

      {/* Segunda linha */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderRadioGroup("freqRespiratoria", [
          "Eupneico",
          "Taquipneico",
          "Bradipneico"
        ], formData.freqRespiratoria, "Frequência Respiratória")}

        {renderRadioGroup("torax", [
          "Tórax simétrico",
          "Tórax assimétrico",
          "Tiragem intercostal",
          "Uso de musculatura acessória"
        ], formData.torax, "Tórax")}

        {renderRadioGroup("auscultaPulmonar", [
          "Murmúrio vesicular presente bilateralmente sem ruídos adventícios",
          "Murmúrio vesicular diminuído",
          "Roncos",
          "Sibilos",
          "Estertores finos",
          "Estertores grossos",
          "Ausência de murmúrio vesicular"
        ], formData.auscultaPulmonar, "Ausculta Pulmonar")}
      </div>

      {/* Terceira linha */}
      <div className="grid grid-cols-1 gap-6">
        {renderRadioGroup("auscultaCardiaca", [
          "2 bulhas rítmicas normofonéticas, sem sopro",
          "2 bulhas arrítmicas",
          "Bulhas hipofonéticas"
        ], formData.auscultaCardiaca, "Ausculta Cardíaca")}
      </div>

      {/* Quarta linha */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderRadioGroup("abdomeInspecao", [
          "Abdome Plano",
          "Abdome Globoso",
          "Abdome Escavado"
        ], formData.abdomeInspecao, "Abdome Inspeção")}

        {renderRadioGroup("abdomePalpacao", [
          "Abdome indolor à palpação",
          "Abdome doloroso à palpação superficial",
          "Abdome doloroso à palpação profunda",
          "Abdome com presença de massa palpável"
        ], formData.abdomePalpacao, "Abdome Palpação")}

        {renderRadioGroup("abdomeAusculta", [
          "Ausculta abd: RHA presentes normofônicos",
          "Ausculta abd: RHA hipoativos",
          "Ausculta abd: RHA hiperativos",
          "Ausculta abd: Ausência de RHA"
        ], formData.abdomeAusculta, "Abdome Ausculta")}
      </div>

      {/* Quinta linha */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderRadioGroup("aceitacaoMedicamentos", [
          "Boa aceitação Medicamentosa",
          "Negou Medicações",
          "Efeitos indesejáveis à medicação"
        ], formData.aceitacaoMedicamentos, "Aceitação Medicamentos")}

        {renderRadioGroup("aceitacaoDieta", [
          "Boa aceitação da dieta",
          "Não aceitou dieta",
          "Efeitos indesejáveis à diéta"
        ], formData.aceitacaoDieta, "Aceitação Dieta")}

        {renderRadioGroup("sono", [
          "Nega alterações do sono",
          "Refere não conseguir dormir"
        ], formData.sono, "Sono")}

        {renderRadioGroup("urina", [
          "Nega alteração do Hábito Urinário",
          "Refere disuria",
          "Refere oliguria",
          "Refere anuria"
        ], formData.urina, "Urina")}

        {renderRadioGroup("habitoIntestinal", [
          "Nega alterações do Hábito intestinal",
          "Não evacuou nas ultimas 24h",
          "Não evacuou nas ultimas 48h",
          "Não evacuou nas ultimas 72h",
          "Refere diarreia"
        ], formData.habitoIntestinal, "Hábito Intestinal")}

        {renderRadioGroup("intercorrencias", [
          "Não houveram intercorrências nas ultimas 24h"
        ], formData.intercorrencias, "Intercorrências")}
      </div>

      {/* Dispositivos */}
      <div className="space-y-2">
        <Label className="text-lg font-medium">Dispositivos</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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