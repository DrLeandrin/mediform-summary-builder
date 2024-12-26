import React, { useState } from "react";
import MedicalForm from "@/components/MedicalForm";
import Summary from "@/components/Summary";
import { FormData, initialFormData } from "@/lib/types";
import { generateSummary } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [summary, setSummary] = useState("");

  const handleFormChange = (newData: Partial<FormData>) => {
    const updatedFormData = { ...formData, ...newData };
    setFormData(updatedFormData);
    setSummary(generateSummary(updatedFormData));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSummary("");
  };

  const handleSelectFirstOptions = () => {
    const firstOptions: Partial<FormData> = {
      estadoGeral: "Bom estado geral",
      consciencia: "Lúcido e orientado",
      temperatura: "Normotermia",
      freqRespiratoria: "Eupneico",
      torax: "Tórax simétrico",
      auscultaPulmonar: "Murmúrio vesicular presente bilateralmente sem ruídos adventícios",
      auscultaCardiaca: "2 bulhas rítmicas normofonéticas, sem sopro",
      abdomeInspecao: "Abdome Plano",
      abdomePalpacao: "Abdome indolor à palpação",
      abdomeAusculta: "Ausculta abd: RHA presentes normofônicos",
      colaboracao: "Colaborativo",
      contato: "Contactuante",
      fala: "Fala Clara e compreensível",
      pensamento: "Pensamento Lógico e coerente",
      humorAfeto: "Eutímico",
      aceitacaoMedicamentos: "Boa aceitação Medicamentosa",
      perfusaoPeriferica: "Perfusão periférica normal",
      cianose: "Acianótico",
      ictericia: "Anictérico",
      palidez: "Corado",
      hidratacao: "Hidratado",
      estadoNutricional: "Eutrófico",
      mobilidade: "Deambulando normalmente",
      aceitacaoDieta: "Boa aceitação da dieta",
      sono: "Nega alterações do sono",
      urina: "Nega alteração do Hábito Urinário",
      habitoIntestinal: "Nega alterações do Hábito intestinal",
      intercorrencias: "Não houveram intercorrências nas ultimas 24h",
      acompanhante: "Com acompanhante"
    };
    handleFormChange(firstOptions);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Formulário de Exame Médico
            </h1>
            <Button 
              onClick={handleSelectFirstOptions}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Padrão
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <MedicalForm formData={formData} onChange={handleFormChange} />
          </div>

          <div className="bg-white rounded-lg shadow">
            <Summary 
              summary={summary} 
              onSummaryChange={setSummary} 
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;