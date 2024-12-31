import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CustomFieldInputProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

const CustomFieldInput: React.FC<CustomFieldInputProps> = ({
  value,
  onChange,
  onAdd,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Nome do novo campo"
        className="flex-grow"
      />
      <Button type="button" onClick={onAdd} size="sm">
        Adicionar
      </Button>
    </div>
  );
};

export default CustomFieldInput;