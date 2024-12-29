import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CustomFieldInputProps {
  newFieldName: string;
  onFieldNameChange: (value: string) => void;
  onAddField: () => void;
}

const CustomFieldInput: React.FC<CustomFieldInputProps> = ({
  newFieldName,
  onFieldNameChange,
  onAddField,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Input
        value={newFieldName}
        onChange={(e) => onFieldNameChange(e.target.value)}
        placeholder="Nome do novo campo"
        className="flex-grow"
      />
      <Button type="button" onClick={onAddField} size="sm">
        Adicionar
      </Button>
    </div>
  );
};

export default CustomFieldInput;