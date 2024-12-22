import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

interface SummaryProps {
  summary: string;
  onSummaryChange: (value: string) => void;
}

const Summary: React.FC<SummaryProps> = ({ summary, onSummaryChange }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      toast({
        title: "Sumário copiado!",
        description: "O texto foi copiado para a área de transferência.",
      });
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o texto.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full space-y-4 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-800">Sumário</h2>
      <Textarea
        value={summary}
        onChange={(e) => onSummaryChange(e.target.value)}
        className="min-h-[200px] w-full p-2"
        placeholder="O sumário será gerado automaticamente conforme você preenche o formulário..."
      />
      <Button onClick={handleCopy} className="w-full">
        Copiar Sumário
      </Button>
    </div>
  );
};

export default Summary;