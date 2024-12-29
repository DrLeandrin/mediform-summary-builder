export interface FormData {
  pacienteNome: string;
  queixas: string;
  exameFisicoFocado: string;
  estadoGeral: string;
  consciencia: string;
  temperatura: string;
  freqRespiratoria: string;
  torax: string;
  auscultaPulmonar: string;
  auscultaCardiaca: string;
  abdomeInspecao: string;
  abdomePalpacao: string;
  abdomeAusculta: string;
  colaboracao: string;
  contato: string;
  fala: string;
  pensamento: string;
  humorAfeto: string;
  aceitacaoMedicamentos: string;
  perfusaoPeriferica: string;
  cianose: string;
  ictericia: string;
  palidez: string;
  hidratacao: string;
  estadoNutricional: string;
  mobilidade: string;
  aceitacaoDieta: string;
  sono: string;
  urina: string;
  habitoIntestinal: string;
  intercorrencias: string;
  acompanhante: string;
  dispositivos: string[];
  sinaisVitais: Record<string, string>;
  laboratoriais: Record<string, string>;
}

export const initialFormData: FormData = {
  pacienteNome: "",
  queixas: "",
  exameFisicoFocado: "",
  estadoGeral: "",
  consciencia: "",
  temperatura: "",
  freqRespiratoria: "",
  torax: "",
  auscultaPulmonar: "",
  auscultaCardiaca: "",
  abdomeInspecao: "",
  abdomePalpacao: "",
  abdomeAusculta: "",
  colaboracao: "",
  contato: "",
  fala: "",
  pensamento: "",
  humorAfeto: "",
  aceitacaoMedicamentos: "",
  perfusaoPeriferica: "",
  cianose: "",
  ictericia: "",
  palidez: "",
  hidratacao: "",
  estadoNutricional: "",
  mobilidade: "",
  aceitacaoDieta: "",
  sono: "",
  urina: "",
  habitoIntestinal: "",
  intercorrencias: "",
  acompanhante: "",
  dispositivos: [],
  sinaisVitais: {},
  laboratoriais: {},
};