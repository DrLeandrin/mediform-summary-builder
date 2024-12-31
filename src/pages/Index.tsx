import React, { useState } from "react";
import { FormData, initialFormData } from "@/lib/types";
import { toast } from "@/components/ui/use-toast";
import { generateSummary } from "@/lib/utils";
import PageHeader from "@/components/tab/PageHeader";
import TabContainer from "@/components/tab/TabContainer";
import MarketingSection from "@/components/marketing/MarketingSection";

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

  const handleDeleteTab = (tabId: string) => {
    setTabs((prevTabs) => {
      const newTabs = prevTabs.filter((tab) => tab.id !== tabId);
      if (activeTab === tabId) {
        setActiveTab(newTabs[0].id);
      }
      return newTabs;
    });
    toast({
      title: "Aba removida",
      description: "A aba do paciente foi removida com sucesso.",
      duration: 1000,
    });
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

          <TabContainer
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onFormChange={handleFormChange}
            onSummaryChange={handleSummaryChange}
            onReset={handleReset}
            onAddTab={addNewTab}
            onCopyAll={copyAllSummaries}
            onTabNameChange={handleTabNameChange}
            onToggleEdit={toggleEditTabName}
            onDeleteTab={handleDeleteTab}
          />

          <MarketingSection />
        </div>
      </div>
    </div>
  );
};

export default Index;