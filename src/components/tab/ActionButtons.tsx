import React from "react";
import { Button } from "../ui/button";
import { Plus, Copy } from "lucide-react";

interface ActionButtonsProps {
  onAddTab: () => void;
  onCopyAll: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onAddTab, onCopyAll }) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onAddTab}
        className="rounded-full"
      >
        <Plus className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onCopyAll}
        className="rounded-full"
        title="Copiar todos os sumários"
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ActionButtons;