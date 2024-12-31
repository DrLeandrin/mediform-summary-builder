import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CustomFieldInput from "./form/CustomFieldInput";

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
  const [markedFields, setMarkedFields] = useState<Record<string, boolean>>({});

  // Reset marked fields when fields are empty
  useEffect(() => {
    const hasValues = Object.values(fields).some(value => value !== "");
    if (!hasValues) {
      setMarkedFields({});
    }
  }, [fields]);

  const handleValueChange = (key: string, value: string) => {
    const cleanValue = value.replace(/[(!)]*/g, '');
    onChange(key, markedFields[key] ? `${cleanValue}(!)` : cleanValue);
  };

  const handleMarkChange = (key: string, checked: boolean) => {
    setMarkedFields(prev => ({ ...prev, [key]: checked }));
    const cleanValue = fields[key].replace(/[(!)]*/g, '');
    onChange(key, checked ? `${cleanValue}(!)` : cleanValue);
  };

  const handleAddField = () => {
    if (newFieldName.trim()) {
      onChange(newFieldName.trim(), "");
      setNewFieldName("");
    }
  };

  return (
    <div className="space-y-4 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="space-y-4">
        {Object.entries(fields).map(([key, value]) => {
          const cleanValue = value.replace(/[(!)]*/g, '');
          const isMarked = value.includes('(!)');

          return (
            <div key={key} className="flex items-center gap-4">
              <div className="flex-grow">
                <Label htmlFor={key} className="text-foreground">
                  {key}
                </Label>
                <Input
                  id={key}
                  value={cleanValue}
                  onChange={(e) => handleValueChange(key, e.target.value)}
                  className="bg-background text-foreground"
                />
              </div>
              <input
                type="checkbox"
                checked={isMarked}
                onChange={(e) => handleMarkChange(key, e.target.checked)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-6"
                title="Marcar como importante"
              />
              {onRemove && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(key)}
                  className="mt-6"
                >
                  ×
                </Button>
              )}
            </div>
          );
        })}
      </div>

      {allowCustomFields && (
        <CustomFieldInput
          value={newFieldName}
          onChange={setNewFieldName}
          onAdd={handleAddField}
        />
      )}
    </div>
  );
};

export default FormInputGroup;