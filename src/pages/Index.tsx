import React, { useState } from "react";
import MedicalForm from "@/components/MedicalForm";
import Summary from "@/components/Summary";
import { FormData, initialFormData } from "@/lib/types";
import { generateSummary } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

interface PatientTab {
  id: string;
  name: string;
  formData: FormData;
  summary: string;
  isEditing: boolean;
}

const Index = () => {
  const [tabs, setTabs] = useState<PatientTab[]>([
    {
      id: "1",
      name: "Paciente 1",
      formData: initialFormData,
      summary: "",
      isEditing: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState("1");

  const handleFormChange = (tabId: string, newData: Partial<FormData>) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.id === tabId) {
          const updatedFormData = { ...tab.formData, ...newData };
          return {
            ...tab,
            formData: updatedFormData,
            summary: generateSummary(updatedFormData),
          };
        }
        return tab;
      })
    );
  };

  const handleSummaryChange = (tabId: string, newSummary: string) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === tabId ? { ...tab, summary: newSummary } : tab
      )
    );
  };

  const handleReset = (tabId: string) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === tabId
          ? { ...tab, formData: initialFormData, summary: "" }
          : tab
      )
    );
  };

  const addNewTab = () => {
    const newId = (tabs.length + 1).toString();
    setTabs((prevTabs) => [
      ...prevTabs,
      {
        id: newId,
        name: `Paciente ${newId}`,
        formData: initialFormData,
        summary: "",
        isEditing: false,
      },
    ]);
    setActiveTab(newId);
    toast({
      title: "Nova aba criada",
      description: "Uma nova aba foi adicionada para um novo paciente.",
    });
  };

  const toggleEditTabName = (tabId: string) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === tabId ? { ...tab, isEditing: !tab.isEditing } : tab
      )
    );
  };

  const handleTabNameChange = (tabId: string, newName: string) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === tabId ? { ...tab, name: newName, isEditing: false } : tab
      )
    );
    toast({
      title: "Nome alterado",
      description: "O nome da aba foi atualizado com sucesso.",
    });
  };

  const handleSelectFirstOptions = (tabId: string) => {
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
    handleFormChange(tabId, firstOptions);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-center">
                Monta Evolução - Avelis.com.br
              </h1>
              <ThemeToggle />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center gap-2 mb-4">
              <TabsList>
                {tabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id} className="relative">
                    {tab.isEditing ? (
                      <Input
                        className="w-24 h-6 px-1 py-0"
                        value={tab.name}
                        onChange={(e) => handleTabNameChange(tab.id, e.target.value)}
                        onBlur={() => toggleEditTabName(tab.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleTabNameChange(tab.id, (e.target as HTMLInputElement).value);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <>
                        {tab.name}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 absolute right-1 opacity-50 hover:opacity-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleEditTabName(tab.id);
                          }}
                        >
                          <Edit2 className="h-3 w-3" />
                        </Button>
                      </>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>
              <Button
                variant="outline"
                size="icon"
                onClick={addNewTab}
                className="rounded-full"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="space-y-8">
                  <div className="flex justify-end">
                    <Button
                      onClick={() => handleSelectFirstOptions(tab.id)}
                      variant="default"
                    >
                      Padrão
                    </Button>
                  </div>

                  <div className="bg-card text-card-foreground rounded-lg shadow p-6">
                    <MedicalForm
                      formData={tab.formData}
                      onChange={(newData) => handleFormChange(tab.id, newData)}
                    />
                  </div>

                  <div className="bg-card text-card-foreground rounded-lg shadow">
                    <Summary
                      summary={tab.summary}
                      onSummaryChange={(newSummary) =>
                        handleSummaryChange(tab.id, newSummary)
                      }
                      onReset={() => handleReset(tab.id)}
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;