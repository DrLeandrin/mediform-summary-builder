import { toast } from "@/components/ui/use-toast";
import { PatientTab } from "./useTabs";

export const useSummaries = (tabs: PatientTab[]) => {
  const copyAllSummaries = async () => {
    const allSummaries = tabs
      .map((tab) => {
        if (!tab.summary.trim()) return null;
        return `=== ${tab.formData.pacienteNome || tab.name} ===\n${tab.summary}\n`;
      })
      .filter(Boolean)
      .join("\n");

    if (!allSummaries) {
      toast({
        title: "Nenhum sumário disponível",
        description: "Não há sumários preenchidos para copiar.",
        variant: "destructive",
        duration: 1000,
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(allSummaries);
      toast({
        title: "Sumários copiados!",
        description: "Todos os sumários foram copiados para a área de transferência.",
        duration: 1000,
      });
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar os sumários.",
        variant: "destructive",
        duration: 1000,
      });
    }
  };

  return { copyAllSummaries };
};