import React, { useState } from "react";
import { TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PatientTabHeaderProps {
  id: string;
  name: string;
  isEditing: boolean;
  onNameChange: (id: string, newName: string) => void;
  onToggleEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isActive?: boolean;
}

const PatientTabHeader: React.FC<PatientTabHeaderProps> = ({
  id,
  name,
  isEditing,
  onNameChange,
  onToggleEdit,
  onDelete,
  isActive = false,
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
    <TabsTrigger 
      value={id} 
      className={cn(
        "relative group w-[120px] px-2 flex items-center justify-center min-h-[32px]",
        isActive && "bg-primary/10"
      )}
    >
      {isEditing ? (
        <Input
          className="w-20 h-6 px-1 py-0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <>
          <span className="truncate max-w-[100px]">{name}</span>
          {isActive && (
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 absolute -right-1 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(id);
              }}
            >
              <Trash2 className="h-3 w-3 text-destructive" />
            </Button>
          )}
        </>
      )}
    </TabsTrigger>
  );
};

export default PatientTabHeader;