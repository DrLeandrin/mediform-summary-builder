import React from "react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { FormData } from "@/lib/types";
import PatientTabHeader from "@/components/PatientTabHeader";
import TabContent from "./TabContent";
import ActionButtons from "./ActionButtons";

interface PatientTab {
  id: string;
  name: string;
  formData: FormData;
  summary: string;
  isEditing: boolean;
}

interface TabContainerProps {
  tabs: PatientTab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  onFormChange: (tabId: string, newData: Partial<FormData>) => void;
  onSummaryChange: (tabId: string, newSummary: string) => void;
  onReset: (tabId: string) => void;
  onAddTab: () => void;
  onCopyAll: () => void;
  onTabNameChange: (tabId: string, newName: string) => void;
  onToggleEdit: (tabId: string) => void;
}

const TabContainer: React.FC<TabContainerProps> = ({
  tabs,
  activeTab,
  onTabChange,
  onFormChange,
  onSummaryChange,
  onReset,
  onAddTab,
  onCopyAll,
  onTabNameChange,
  onToggleEdit,
}) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <TabsList>
          {tabs.map((tab) => (
            <PatientTabHeader
              key={tab.id}
              id={tab.id}
              name={tab.name}
              isEditing={tab.isEditing}
              onNameChange={onTabNameChange}
              onToggleEdit={onToggleEdit}
            />
          ))}
        </TabsList>
        <ActionButtons onAddTab={onAddTab} onCopyAll={onCopyAll} />
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          <TabContent
            formData={tab.formData}
            summary={tab.summary}
            onChange={(newData) => onFormChange(tab.id, newData)}
            onSummaryChange={(newSummary) => onSummaryChange(tab.id, newSummary)}
            onReset={() => onReset(tab.id)}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabContainer;