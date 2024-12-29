import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface RegularFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onRemove?: () => void;
  isVital?: boolean;
}

const RegularField: React.FC<RegularFieldProps> = ({
  id,
  label,
  value,
  onChange,
  onRemove,
  isVital,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label htmlFor={id} className="text-foreground">
          {label.toUpperCase()}
        </Label>
        {onRemove && !isVital && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onRemove}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-background text-foreground"
      />
    </div>
  );
};

export default RegularField;