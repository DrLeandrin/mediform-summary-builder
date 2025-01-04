import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface AuscultaPulmonarLocationsProps {
  selectedLocations: string[];
  onChange: (locations: string[]) => void;
  disabled?: boolean;
}

const AuscultaPulmonarLocations: React.FC<AuscultaPulmonarLocationsProps> = ({
  selectedLocations,
  onChange,
  disabled = false,
}) => {
  const locations = [
    "base direita",
    "base esquerda",
    "ápice direito",
    "ápice esquerdo",
    "global"
  ];

  return (
    <div className={`ml-6 space-y-2 ${disabled ? 'opacity-50' : ''}`}>
      <Label className="text-sm font-medium">Localização:</Label>
      <div className="grid grid-cols-2 gap-4">
        {locations.map((location) => (
          <div key={location} className="flex items-center space-x-2">
            <Checkbox
              id={location}
              checked={selectedLocations.includes(location)}
              onCheckedChange={(checked) => {
                if (!disabled) {
                  const newLocations = checked
                    ? [...selectedLocations, location]
                    : selectedLocations.filter((l) => l !== location);
                  onChange(newLocations);
                }
              }}
              disabled={disabled}
            />
            <Label 
              htmlFor={location} 
              className={`text-sm ${disabled ? 'cursor-not-allowed' : ''}`}
            >
              {location}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuscultaPulmonarLocations;