import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormInputGroupProps {
  title: string;
  fields: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

const FormInputGroup: React.FC<FormInputGroupProps> = ({
  title,
  fields,
  onChange,
}) => (
  <div className="space-y-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
    <Label className="text-lg font-medium">{title}</Label>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {Object.entries(fields).map(([key, value]) => (
        <div key={key} className="space-y-2">
          <Label htmlFor={key}>{key.toUpperCase()}</Label>
          <Input
            id={key}
            value={value}
            onChange={(e) => onChange(key, e.target.value)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default FormInputGroup;