import React from "react";
import FormRadioGroup from "../FormRadioGroup";
import { FormData } from "@/lib/types";

interface HabitoIntestinalGroupProps {
  value: string;
  onChange: (value: string) => void;
}

const HabitoIntestinalGroup: React.FC<HabitoIntestinalGroupProps> = ({
  value,
  onChange,
}) => {
  return (
    <FormRadioGroup
      name="habitoIntestinal"
      options={[
        "Nega alterações do Hábito intestinal",
        "Não evacuou nas ultimas 24h",
        "Não evacuou nas ultimas 48h",
        "Não evacuou nas ultimas 72h",
        "Refere diarreia."
      ]}
      value={value}
      label="Hábito Intestinal"
      onChange={onChange}
    />
  );
};

export default HabitoIntestinalGroup;