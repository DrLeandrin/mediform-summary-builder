import React from "react";
import MedicalForm from "../MedicalForm";
import Summary from "../Summary";
import { FormData } from "@/lib/types";
import { Button } from "../ui/button";
import { Wand2 } from "lucide-react";
import { toast } from "../ui/use-toast";

interface TabContentProps {
  formData: FormData;
  summary: string;
  onChange: (newData: Partial<FormData>) => void;
  onSummaryChange: (newSummary: string) => void;
  onReset: () => void;
}

const TabContent: React.FC<TabContentProps> = ({
  formData,
  summary,
  onChange,
  onSummaryChange,
  onReset,
}) => {
  const handleSelectFirstOptions = () => {
    const firstOptions = {
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

    onChange(firstOptions);
    toast({
      title: "Opções padrão selecionadas",
      description: "Todas as primeiras opções foram selecionadas automaticamente.",
      duration: 1000,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSelectFirstOptions}
          className="gap-2"
        >
          <Wand2 className="h-4 w-4" />
          Selecionar Opções Padrão
        </Button>
      </div>

      <div className="bg-card text-card-foreground rounded-lg shadow p-6">
        <MedicalForm
          formData={formData}
          onChange={onChange}
        />
      </div>

      <div className="bg-card text-card-foreground rounded-lg shadow">
        <Summary
          summary={summary}
          onSummaryChange={onSummaryChange}
          onReset={onReset}
        />
      </div>
    </div>
  );
};

export default TabContent;