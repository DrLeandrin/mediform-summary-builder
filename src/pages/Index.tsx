import React, { useEffect } from "react";
import PageHeader from "@/components/tab/PageHeader";
import TabContainer from "@/components/tab/TabContainer";
import MarketingSection from "@/components/marketing/MarketingSection";
import { useTabs } from "@/hooks/useTabs";
import { useSummaries } from "@/hooks/useSummaries";
import { initialFormData } from "@/lib/types";

const Index = () => {
  const {
    tabs,
    activeTab,
    setActiveTab,
    handleFormChange,
    handleSummaryChange,
    handleReset,
    addNewTab,
    toggleEditTabName,
    handleTabNameChange,
    handleDeleteTab,
  } = useTabs();

  const { copyAllSummaries } = useSummaries(tabs);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const hasUnsavedChanges = tabs.some(
        (tab) => JSON.stringify(tab.formData) !== JSON.stringify(initialFormData)
      );

      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "Há alterações não salvas. Deseja realmente sair?";
        return e.returnValue;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [tabs]);

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