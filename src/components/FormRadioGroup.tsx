import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormRadioGroupProps {
  name: string;
  options: string[];
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  options,
  value,
  label,
  onChange,
}) => {
  return (
    <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <h3 className="text-center font-bold uppercase mb-4">{label}</h3>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="space-y-2"
      >
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`${name}-${option}`} />
            <Label
              htmlFor={`${name}-${option}`}
              className="uppercase font-normal cursor-pointer"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FormRadioGroup;