import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

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
      case 'fr':
        return { min: 0, max: 40, step: 1, label: 'FR (rpm)' };
      case 'fc':
        return { min: 40, max: 200, step: 1, label: 'FC (bpm)' };
      case 'satO2':
        return { min: 0, max: 100, step: 1, label: 'SatO2 (%)' };
      case 'pas':
        return { min: 40, max: 250, step: 1, label: 'PAS (mmHg)' };
      case 'pad':
        return { min: 0, max: 150, step: 1, label: 'PAD (mmHg)' };
      case 'dextro':
        return { min: 0, max: 600, step: 1, label: 'Dextro (mg/dL)' };
      case 'temperatura':
        return { min: 35, max: 42, step: 0.1, label: 'Temperatura (°C)' };
      default:
        return null;
    }
  };

  const isVitalSign = (key: string) => {
    return ['fr', 'fc', 'satO2', 'pas', 'pad', 'dextro', 'temperatura'].includes(key);
  };

  const handleAddField = (e: React.FormEvent) => {
    e.preventDefault();
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
        <form onSubmit={handleAddField} className="flex gap-2 items-center">
          <Input
            value={newFieldName}
            onChange={(e) => setNewFieldName(e.target.value)}
            placeholder="Nome do novo campo"
            className="flex-grow"
          />
          <Button type="submit" size="sm">
            Adicionar
          </Button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(fields).map(([key, value]) => {
          const sliderConfig = getSliderConfig(key);
          const isVital = isVitalSign(key);

          if (isVital && sliderConfig) {
            return (
              <div key={key} className="space-y-2">
                <Label htmlFor={key} className="text-foreground">{sliderConfig.label}</Label>
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <Slider
                      id={key}
                      min={sliderConfig.min}
                      max={sliderConfig.max}
                      step={sliderConfig.step}
                      value={[Number(value) || sliderConfig.min]}
                      onValueChange={(vals) => onChange(key, vals[0].toString())}
                    />
                  </div>
                  <div className="w-16">
                    <Input
                      type="number"
                      value={value}
                      onChange={(e) => onChange(key, e.target.value)}
                      className="text-right bg-background text-foreground"
                      min={sliderConfig.min}
                      max={sliderConfig.max}
                      step={sliderConfig.step}
                    />
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={key} className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor={key} className="text-foreground">{key.toUpperCase()}</Label>
                {onRemove && !isVital && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemove(key)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <Input
                id={key}
                value={value}
                onChange={(e) => onChange(key, e.target.value)}
                className="bg-background text-foreground"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormInputGroup;