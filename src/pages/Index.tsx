import React, { useState } from "react";
import MedicalForm from "@/components/MedicalForm";
import Summary from "@/components/Summary";
import { Button } from "@/components/ui/button";
import { FormData, initialFormData } from "@/lib/types";
import { generateSummary } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [summary, setSummary] = useState("");

  const handleFormChange = (newData: Partial<FormData>) => {
    const updatedFormData = { ...formData, ...newData };
    setFormData(updatedFormData);
    setSummary(generateSummary(updatedFormData));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSummary("");
    toast({
      title: "Formulário resetado",
      description: "Todos os campos foram limpos.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Formulário de Exame Médico
            </h1>
            <Button variant="outline" onClick={handleReset}>
              Resetar Formulário
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <MedicalForm formData={formData} onChange={handleFormChange} />
          </div>

          <div className="bg-white rounded-lg shadow">
            <Summary summary={summary} onSummaryChange={setSummary} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;