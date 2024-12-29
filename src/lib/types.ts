export interface FormData {
  pacienteNome: string;
  queixas: string;
  laboratoriais: Record<string, string>;
  dispositivos: string[];
  sinaisVitais: Record<string, string>;
  exameFisicoFocado: string;
}

export const initialFormData: FormData = {
  pacienteNome: "",
  queixas: "",
  laboratoriais: {},
  dispositivos: [],
  sinaisVitais: {},
  exameFisicoFocado: "",
};
