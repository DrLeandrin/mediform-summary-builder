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
}) => (
  <div className="space-y-2 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
    <Label className="text-sm font-bold uppercase block text-center w-full">{label}</Label>
    <RadioGroup
      value={value}
      onValueChange={(value) => onChange(value)}
      className="grid grid-cols-1 gap-2"
    >
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-2">
          <RadioGroupItem value={option} id={`${name}-${option}`} />
          <Label htmlFor={`${name}-${option}`} className="font-bold uppercase">{option}</Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);

export default FormRadioGroup;