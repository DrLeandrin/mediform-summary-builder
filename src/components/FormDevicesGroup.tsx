import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface FormDevicesGroupProps {
  devices: string[];
  selectedDevices: string[];
  onChange: (devices: string[]) => void;
}

const FormDevicesGroup: React.FC<FormDevicesGroupProps> = ({
  devices,
  selectedDevices,
  onChange,
}) => (
  <div className="space-y-2 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
    <Label className="text-lg font-medium">Dispositivos</Label>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {devices.map((device) => (
        <div key={device} className="flex items-center space-x-2">
          <Checkbox
            id={device}
            checked={selectedDevices.includes(device)}
            onCheckedChange={(checked) => {
              const newDevices = checked
                ? [...selectedDevices, device]
                : selectedDevices.filter((d) => d !== device);
              onChange(newDevices);
            }}
          />
          <Label htmlFor={device}>{device}</Label>
        </div>
      ))}
    </div>
  </div>
);

export default FormDevicesGroup;