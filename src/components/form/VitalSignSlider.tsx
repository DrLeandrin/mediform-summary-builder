import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface VitalSignSliderProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  min: number;
  max: number;
  step: number;
}

const VitalSignSlider: React.FC<VitalSignSliderProps> = ({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-foreground">
        {label}
      </Label>
      <div className="flex items-center space-x-4">
        <div className="flex-grow">
          <Slider
            id={id}
            min={min}
            max={max}
            step={step}
            value={[Number(value) || min]}
            onValueChange={(vals) => onChange(vals[0].toString())}
          />
        </div>
        <div className="w-20">
          <Input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-right bg-background text-foreground"
            min={min}
            max={max}
            step={step}
          />
        </div>
      </div>
    </div>
  );
};

export default VitalSignSlider;