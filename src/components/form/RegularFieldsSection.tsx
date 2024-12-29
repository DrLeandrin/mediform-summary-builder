import React from "react";
import RegularField from "./RegularField";

interface RegularFieldsSectionProps {
  fields: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onRemove?: (key: string) => void;
  isVitalSign: (key: string) => boolean;
}

const RegularFieldsSection: React.FC<RegularFieldsSectionProps> = ({
  fields,
  onChange,
  onRemove,
  isVitalSign,
}) => {
  return (
    <>
      {Object.entries(fields).map(([key, value]) => {
        const isVital = isVitalSign(key);
        if (!isVital) {
          return (
            <RegularField
              key={key}
              id={key}
              label={key}
              value={value}
              onChange={(newValue) => onChange(key, newValue)}
              onRemove={onRemove ? () => onRemove(key) : undefined}
              isVital={isVital}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default RegularFieldsSection;