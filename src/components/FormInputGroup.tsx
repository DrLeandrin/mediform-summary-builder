import React, { useState, useCallback } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CustomFieldInput from "./form/CustomFieldInput";
import VitalSignsSection from "./form/VitalSignsSection";
import RegularFieldsSection from "./form/RegularFieldsSection";

interface FormInputGroupProps {
  title: string;
  fields: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onRemove?: (key: string) => void;
  allowCustomFields?: boolean;
}

const FormInputGroup: React.FC<FormInputGroupProps> = ({
  title,
  fields,
  onChange,
  onRemove,
  allowCustomFields = false,
}) => {
  const [newFieldName, setNewFieldName] = useState("");
  const [showAddField, setShowAddField] = useState(false);

  const getSliderConfig = useCallback((key: string) => {
    switch (key) {
      case "fr":
        return { min: 0, max: 40, step: 1, label: "FR (rpm)" };
      case "fc":
        return { min: 40, max: 200, step: 1, label: "FC (bpm)" };
      case "satO2":
        return { min: 0, max: 100, step: 1, label: "SatO2 (%)" };
      case "pas":
        return { min: 40, max: 250, step: 1, label: "PAS (mmHg)" };
      case "pad":
        return { min: 0, max: 150, step: 1, label: "PAD (mmHg)" };
      case "dextro":
        return { min: 0, max: 600, step: 1, label: "Dextro (mg/dL)" };
      case "temperatura":
        return { min: 35, max: 42, step: 0.1, label: "Temperatura (°C)" };
      default:
        return null;
    }
  }, []);

  const isVitalSign = useCallback((key: string) => {
    return [
      "fr",
      "fc",
      "satO2",
      "pas",
      "pad",
      "dextro",
      "temperatura",
    ].includes(key);
  }, []);

  const handleAddField = useCallback(() => {
    if (newFieldName.trim()) {
      onChange(newFieldName.toLowerCase(), "");
      setNewFieldName("");
      setShowAddField(false);
    }
  }, [newFieldName, onChange]);

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-card text-card-foreground">
      <div className="flex justify-between items-center">
        <Label className="text-lg font-medium">{title}</Label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <VitalSignsSection
          fields={fields}
          onChange={onChange}
          getSliderConfig={getSliderConfig}
          isVitalSign={isVitalSign}
        />
        
        <RegularFieldsSection
          fields={fields}
          onChange={onChange}
          onRemove={onRemove}
          isVitalSign={isVitalSign}
        />
        
        {allowCustomFields && !showAddField && (
          <div className="flex items-center justify-center h-[72px] border-2 border-dashed rounded-lg hover:border-primary/50 transition-colors">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowAddField(true)}
              className="h-full w-full flex items-center justify-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Adicionar Campo
            </Button>
          </div>
        )}
      </div>

      {showAddField && (
        <CustomFieldInput
          newFieldName={newFieldName}
          onFieldNameChange={setNewFieldName}
          onAddField={handleAddField}
        />
      )}
    </div>
  );
};

export default FormInputGroup;