import React from "react";
import FormRadioGroup from "../FormRadioGroup";
import { Textarea } from "../ui/textarea";
import { FormData } from "@/lib/types";

interface IntercorrenciasGroupProps {
  value: string;
  onChange: (value: string) => void;
}

const IntercorrenciasGroup: React.FC<IntercorrenciasGroupProps> = ({
  value,
  onChange,
}) => {
  const handleCustomIntercorrenciasChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="p-4 rounded-lg border bg-card text-card-foreground">
      <h3 className="text-center font-bold uppercase mb-4">Intercorrências</h3>
      <div className="space-y-4">
        <FormRadioGroup
          name="intercorrencias"
          options={[
            "Não houveram intercorrências nas ultimas 24h"
          ]}
          value={value}
          label=""
          onChange={onChange}
        />
        <div className="mt-2">
          <Textarea
            placeholder="Digite outras intercorrências..."
            value={value !== "Não houveram intercorrências nas ultimas 24h" ? value : ""}
            onChange={handleCustomIntercorrenciasChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default IntercorrenciasGroup;