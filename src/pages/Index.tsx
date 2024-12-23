import React, { useState } from "react";
import MedicalForm from "@/components/MedicalForm";
import Summary from "@/components/Summary";
import { FormData, initialFormData } from "@/lib/types";
import { generateSummary } from "@/lib/utils";

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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Formulário de Exame Médico
          </h1>

          <div className="bg-white rounded-lg shadow p-6">
            <MedicalForm formData={formData} onChange={handleFormChange} />
          </div>

          <div className="bg-white rounded-lg shadow">
            <Summary 
              summary={summary} 
              onSummaryChange={setSummary} 
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;