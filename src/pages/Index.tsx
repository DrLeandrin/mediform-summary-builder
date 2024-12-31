import React from "react";
import PageHeader from "@/components/tab/PageHeader";
import TabContainer from "@/components/tab/TabContainer";
import MarketingSection from "@/components/marketing/MarketingSection";
import { useTabs } from "@/hooks/useTabs";
import { useSummaries } from "@/hooks/useSummaries";

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