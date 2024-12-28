import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface FormInputGroupProps {
  title: string;
  fields: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

const FormInputGroup: React.FC<FormInputGroupProps> = ({
  title,
  fields,
  onChange,
}) => {
  const getSliderConfig = (key: string) => {
    switch (key) {
      case 'fr':
        return { min: 0, max: 40, step: 1, label: 'FR (rpm)' };
      case 'fc':
        return { min: 40, max: 200, step: 1, label: 'FC (bpm)' };
      case 'satO2':
        return { min: 0, max: 100, step: 1, label: 'SatO2 (%)' };
      case 'dextro':
        return { min: 0, max: 600, step: 1, label: 'Dextro (mg/dL)' };
      case 'pa':
        return { min: 0, max: 300, step: 1, label: 'PA (mmHg)' };
      case 'temperatura':
        return { min: 35, max: 42, step: 0.1, label: 'Temperatura (°C)' };
      default:
        return null;
    }
  };

  const isVitalSign = (key: string) => {
    return ['fr', 'fc', 'satO2', 'pa', 'dextro', 'temperatura'].includes(key);
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-card text-card-foreground">
      <Label className="text-lg font-medium">{title}</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(fields).map(([key, value]) => {
          const sliderConfig = getSliderConfig(key);
          const isVital = isVitalSign(key);

          if (isVital && sliderConfig) {
            return (
              <div key={key} className="space-y-2">
                <Label htmlFor={key} className="text-foreground">{sliderConfig.label}</Label>
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <Slider
                      id={key}
                      min={sliderConfig.min}
                      max={sliderConfig.max}
                      step={sliderConfig.step}
                      value={[Number(value) || sliderConfig.min]}
                      onValueChange={(vals) => onChange(key, vals[0].toString())}
                    />
                  </div>
                  <div className="w-16">
                    <Input
                      type="number"
                      value={value}
                      onChange={(e) => onChange(key, e.target.value)}
                      className="text-right bg-background text-foreground"
                      min={sliderConfig.min}
                      max={sliderConfig.max}
                      step={sliderConfig.step}
                    />
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={key} className="space-y-2">
              <Label htmlFor={key} className="text-foreground">{key.toUpperCase()}</Label>
              <Input
                id={key}
                value={value}
                onChange={(e) => onChange(key, e.target.value)}
                className="bg-background text-foreground"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormInputGroup;