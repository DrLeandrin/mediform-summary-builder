import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CustomFieldInput from "./form/CustomFieldInput";
import VitalSignSlider from "./form/VitalSignSlider";
import RegularField from "./form/RegularField";

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

  const getSliderConfig = (key: string) => {
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
  };

  const isVitalSign = (key: string) => {
    return [
      "fr",
      "fc",
      "satO2",
      "pas",
      "pad",
      "dextro",
      "temperatura",
    ].includes(key);
  };

  const handleAddField = () => {
    if (newFieldName.trim()) {
      onChange(newFieldName.toLowerCase(), "");
      setNewFieldName("");
      setShowAddField(false);
    }
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-card text-card-foreground">
      <div className="flex justify-between items-center">
        <Label className="text-lg font-medium">{title}</Label>
        {allowCustomFields && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowAddField(!showAddField)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Campo
          </Button>
        )}
      </div>

      {showAddField && (
        <CustomFieldInput
          newFieldName={newFieldName}
          onFieldNameChange={setNewFieldName}
          onAddField={handleAddField}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(fields).map(([key, value]) => {
          const sliderConfig = getSliderConfig(key);
          const isVital = isVitalSign(key);

          if (isVital && sliderConfig) {
            return (
              <VitalSignSlider
                key={key}
                id={key}
                label={sliderConfig.label}
                value={value}
                onChange={(newValue) => onChange(key, newValue)}
                min={sliderConfig.min}
                max={sliderConfig.max}
                step={sliderConfig.step}
              />
            );
          }

          return (
            <RegularField
              key={key}
              id={key}
              label={key}
              value={value}
              onChange={(newValue) => onChange(key, newValue)}
              onRemove={onRemove ? () => onRemove(key) : undefined}
              isVital={isVital}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FormInputGroup;