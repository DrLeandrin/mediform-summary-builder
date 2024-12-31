import React from "react";
import VitalSignSlider from "./VitalSignSlider";

interface VitalSignsSectionProps {
  fields: Record<string, string>;
  onChange: (key: string, value: string) => void;
  getSliderConfig: (key: string) => {
    min: number;
    max: number;
    step: number;
    label: string;
  } | null;
  isVitalSign: (key: string) => boolean;
}

const VitalSignsSection: React.FC<VitalSignsSectionProps> = ({
  fields,
  onChange,
  getSliderConfig,
  isVitalSign,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(fields).map(([key, value]) => {
        const sliderConfig = getSliderConfig(key);
        if (isVitalSign(key) && sliderConfig) {
          return (
            <VitalSignSlider
              key={key}
              id={key}
              label={sliderConfig.label}
              value={value}
              onChange={(newValue) => onChange(key, newValue)}
              min={sliderConfig.min}
              max={sliderConfig.max}
              step={sliderConfig.step}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default VitalSignsSection;