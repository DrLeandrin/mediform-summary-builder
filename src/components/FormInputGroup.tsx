import React, { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import CustomFieldInput from "./form/CustomFieldInput";
import RegularField from "./form/RegularField";
import { cn } from "@/lib/utils";

interface FormInputGroupProps {
  title: string;
  fields: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onRemove?: (key: string) => void;
  allowCustomFields?: boolean;
  className?: string;
}

const FormInputGroup: React.FC<FormInputGroupProps> = ({
  title,
  fields,
  onChange,
  onRemove,
  allowCustomFields = false,
  className,
}) => {
  const [newFieldName, setNewFieldName] = useState("");
  const [markedFields, setMarkedFields] = useState<Record<string, boolean>>({});

  const handleAddField = () => {
    if (newFieldName.trim()) {
      onChange(newFieldName.toLowerCase(), "");
      setNewFieldName("");
    }
  };

  const handleFieldChange = (key: string, value: string) => {
    onChange(key, markedFields[key] ? `${value}(!)` : value);
  };

  const handleMarkField = (key: string, checked: boolean) => {
    setMarkedFields(prev => {
      const newMarkedFields = { ...prev, [key]: checked };
      
      // Update the field value when marking/unmarking
      const currentValue = fields[key];
      const valueWithoutMark = currentValue.replace("(!)", "");
      onChange(key, checked ? `${valueWithoutMark}(!)` : valueWithoutMark);
      
      return newMarkedFields;
    });
  };

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(fields).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <RegularField
              id={key}
              label={key.toUpperCase()}
              value={value.replace("(!)", "")}
              onChange={(newValue) => handleFieldChange(key, newValue)}
            />
            <input
              type="checkbox"
              checked={markedFields[key] || false}
              onChange={(e) => handleMarkField(key, e.target.checked)}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              title="Marcar como importante"
            />
          </div>
        ))}
      </div>

      {allowCustomFields && (
        <div className="flex items-end gap-2">
          <CustomFieldInput
            newFieldName={newFieldName}
            onFieldNameChange={setNewFieldName}
            onAddField={handleAddField}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleAddField}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Adicionar Campo
          </Button>
        </div>
      )}
    </div>
  );
};

export default FormInputGroup;