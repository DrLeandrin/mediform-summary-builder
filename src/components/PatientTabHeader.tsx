import React, { useState } from "react";
import { TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit2 } from "lucide-react";

interface PatientTabHeaderProps {
  id: string;
  name: string;
  isEditing: boolean;
  onNameChange: (id: string, newName: string) => void;
  onToggleEdit: (id: string) => void;
}

const PatientTabHeader: React.FC<PatientTabHeaderProps> = ({
  id,
  name,
  isEditing,
  onNameChange,
  onToggleEdit,
}) => {
  const [inputValue, setInputValue] = useState(name);

  const handleSubmit = () => {
    onNameChange(id, inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "Escape") {
      setInputValue(name);
      onToggleEdit(id);
    }
  };

  const handleBlur = () => {
    handleSubmit();
  };

  return (
    <TabsTrigger value={id} className="relative group min-w-[100px] px-4">
      {isEditing ? (
        <Input
          className="w-24 h-6 px-1 py-0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <>
          <span className="truncate">{name}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 absolute right-1 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              onToggleEdit(id);
            }}
          >
            <Edit2 className="h-3 w-3" />
          </Button>
        </>
      )}
    </TabsTrigger>
  );
};

export default PatientTabHeader;