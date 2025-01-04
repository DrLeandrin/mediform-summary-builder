import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormRadioGroupProps {
  name: string;
  options: string[];
  value: string;
  label: string;
  onChange: (value: string) => void;
  noBorder?: boolean;
}

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  options,
  value,
  label,
  onChange,
  noBorder = false,
}) => {
  return (
    <div className={`space-y-2 ${!noBorder ? 'border rounded-lg p-4' : ''}`}>
      <Label className="text-sm font-medium">{label}</Label>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="grid gap-2"
      >
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`${name}-${option}`} />
            <Label htmlFor={`${name}-${option}`} className="text-sm">
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FormRadioGroup;