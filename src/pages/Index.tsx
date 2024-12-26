import React, { useState } from "react";
import MedicalForm from "@/components/MedicalForm";
import Summary from "@/components/Summary";
import { FormData, initialFormData } from "@/lib/types";
import { generateSummary } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

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
      temperatura: "Normotermico",
      freqRespiratoria: "Eupneico",
      torax: "Tórax simétrico",
      auscultaPulmonar: "Murmúrio vesicular presente bilateralmente sem ruídos adventícios",
      auscultaCardiaca: "2 bulhas rítmicas normofonéticas, sem sopro",
      abdomeInspecao: "Plano",
      abdomePalpacao: "indolor à palpação",
      abdomeAusculta: "RHA presentes normofônicos",
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
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">
                Formulário de Exame Médico
              </h1>
              <ThemeToggle />
            </div>
            <Button 
              onClick={handleSelectFirstOptions}
              variant="default"
            >
              Padrão
            </Button>
          </div>

          <div className="bg-card text-card-foreground rounded-lg shadow p-6">
            <MedicalForm formData={formData} onChange={handleFormChange} />
          </div>

          <div className="bg-card text-card-foreground rounded-lg shadow">
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
