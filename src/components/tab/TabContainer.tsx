import React from "react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { FormData } from "@/lib/types";
import PatientTabHeader from "@/components/PatientTabHeader";
import TabContent from "./TabContent";
import ActionButtons from "./ActionButtons";
import { toast } from "../ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

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
  onDeleteTab: (tabId: string) => void;
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
  onDeleteTab,
}) => {
  const isMobile = useIsMobile();

  const handleDeleteTab = (tabId: string) => {
    if (tabs.length === 1) {
      toast({
        title: "Não é possível excluir",
        description: "Deve haver pelo menos uma aba de paciente.",
        variant: "destructive",
        duration: 1000,
      });
      return;
    }
    onDeleteTab(tabId);
  };

  const handleFormChange = (tabId: string, newData: Partial<FormData>) => {
    if (newData.pacienteNome) {
      onTabNameChange(tabId, newData.pacienteNome);
    }
    onFormChange(tabId, newData);
  };

  // Encontrar o índice da aba ativa
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <div className="flex items-center justify-center gap-2 mb-4 relative px-8">
        <div className="flex-1 max-w-3xl">
          <TabsList className="w-full h-auto p-1 bg-transparent">
            <Carousel
              opts={{
                align: "center",
                containScroll: false,
                startIndex: activeIndex,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                {tabs.map((tab) => (
                  <CarouselItem key={tab.id} className="pl-1 basis-auto min-w-0">
                    <PatientTabHeader
                      id={tab.id}
                      name={tab.name}
                      isEditing={tab.isEditing}
                      onNameChange={onTabNameChange}
                      onToggleEdit={onToggleEdit}
                      onDelete={handleDeleteTab}
                      isActive={tab.id === activeTab}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {tabs.length > (isMobile ? 2 : 3) && (
                <>
                  <CarouselPrevious className="absolute -left-8" />
                  <CarouselNext className="absolute -right-8" />
                </>
              )}
            </Carousel>
          </TabsList>
        </div>
        <div className="absolute right-0">
          <ActionButtons onAddTab={onAddTab} onCopyAll={onCopyAll} />
        </div>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          <TabContent
            formData={tab.formData}
            summary={tab.summary}
            onChange={(newData) => handleFormChange(tab.id, newData)}
            onSummaryChange={(newSummary) => onSummaryChange(tab.id, newSummary)}
            onReset={() => onReset(tab.id)}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabContainer;