import React from "react";
import { FormData } from "@/lib/types";
import AvaliacaoGeral from "../AvaliacaoGeral";
import GlasgowAssessment from "../GlasgowAssessment";
import RassAssessment from "../RassAssessment";
import AvaliacaoRespiratoria from "../AvaliacaoRespiratoria";
import AvaliacaoCardioAbdominal from "../AvaliacaoCardioAbdominal";
import AvaliacaoNeurologica from "../AvaliacaoNeurologica";
import AvaliacaoFisica from "../AvaliacaoFisica";
import AvaliacaoNecessidades from "../AvaliacaoNecessidades";

interface AssessmentSectionsProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const AssessmentSections: React.FC<AssessmentSectionsProps> = ({
  formData,
  onChange,
}) => {
  return (
    <>
      <AvaliacaoGeral formData={formData} onChange={onChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlasgowAssessment formData={formData} onChange={onChange} />
        <RassAssessment formData={formData} onChange={onChange} />
      </div>
      <AvaliacaoRespiratoria formData={formData} onChange={onChange} />
      <AvaliacaoCardioAbdominal formData={formData} onChange={onChange} />
      <AvaliacaoNeurologica formData={formData} onChange={onChange} />
      <AvaliacaoFisica formData={formData} onChange={onChange} />
      <AvaliacaoNecessidades formData={formData} onChange={onChange} />
    </>
  );
};

export default AssessmentSections;