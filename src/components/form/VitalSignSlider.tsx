import React, { useState, useEffect } from "react";
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
  const [isMarked, setIsMarked] = useState(false);

  // Reset the checkbox state when the value is reset
  useEffect(() => {
    if (!value) {
      setIsMarked(false);
    }
  }, [value]);

  const handleValueChange = (newValue: string) => {
    const cleanValue = newValue.replace(/[(!)]*/g, '');
    onChange(isMarked ? `${cleanValue}(!)` : cleanValue);
  };

  const handleMarkChange = (checked: boolean) => {
    setIsMarked(checked);
    const cleanValue = value.replace(/[(!)]*/g, '');
    onChange(checked ? `${cleanValue}(!)` : cleanValue);
  };

  const displayValue = value.replace(/[(!)]*/g, '');

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
            value={[Number(displayValue) || min]}
            onValueChange={(vals) => handleValueChange(vals[0].toString())}
          />
        </div>
        <div className="w-20">
          <Input
            type="number"
            value={displayValue}
            onChange={(e) => handleValueChange(e.target.value)}
            className="text-right bg-background text-foreground"
            min={min}
            max={max}
            step={step}
          />
        </div>
        <input
          type="checkbox"
          checked={isMarked}
          onChange={(e) => handleMarkChange(e.target.checked)}
          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          title="Marcar como importante"
        />
      </div>
    </div>
  );
};

export default VitalSignSlider;