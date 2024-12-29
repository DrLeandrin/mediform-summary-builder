import React, { useState } from "react";
import { FormData, initialFormData } from "@/lib/types";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import PatientTabHeader from "@/components/PatientTabHeader";
import { generateSummary } from "@/lib/utils";
import PageHeader from "@/components/tab/PageHeader";
import ActionButtons from "@/components/tab/ActionButtons";
import TabContent from "@/components/tab/TabContent";

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
      duration: 1000,
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
    if (!newName.trim()) return;
    
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === tabId ? { ...tab, name: newName, isEditing: false } : tab
      )
    );
  };

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

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-8">
          <PageHeader />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center gap-2 mb-4">
              <TabsList>
                {tabs.map((tab) => (
                  <PatientTabHeader
                    key={tab.id}
                    id={tab.id}
                    name={tab.name}
                    isEditing={tab.isEditing}
                    onNameChange={handleTabNameChange}
                    onToggleEdit={toggleEditTabName}
                  />
                ))}
              </TabsList>
              <ActionButtons 
                onAddTab={addNewTab}
                onCopyAll={copyAllSummaries}
              />
            </div>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <TabContent
                  formData={tab.formData}
                  summary={tab.summary}
                  onChange={(newData) => handleFormChange(tab.id, newData)}
                  onSummaryChange={(newSummary) => handleSummaryChange(tab.id, newSummary)}
                  onReset={() => handleReset(tab.id)}
                />
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center py-8">
            <p className="font-serif text-lg italic text-gray-200">
              Psiu!<br />
              Está gostando da ferramenta? Esta é só uma amostra do que a{" "}
              <a 
                href="https://www.avelis.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Avelis
              </a>{" "}
              pode fazer por você! Venha conhecer inteligencia artificial mais avançada para médicos! GRATIS!
            </p>

            <div className="mt-8 text-gray-200">
              <p className="font-bold mb-2">Você também pode gostar:</p>
              <ul className="space-y-1">
                <li>
                  <a 
                    href="https://pdp.avelis.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Pedaço de Papel
                  </a>
                  {" "}- A forma mais facil e rapida de salvar e compartilhar textos.
                </li>
                <li>
                  <a 
                    href="https://casus.avelis.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Casus
                  </a>
                  {" "}- Discussão avançada de casos clínicos complexos usando IA.
                </li>
                <li>
                  <a 
                    href="https://www.avelis.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Avelis
                  </a>
                  {" "}- A mais avançada ferramenta de suporte a tomada de decisão e registro médico com IA.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;