export interface FormData {
  pacienteNome: string;
  queixas: string;
  exameFisicoFocado: string;
  estadoGeral: string;
  consciencia: string;
  glasgowOcular: string;
  glasgowVerbal: string;
  glasgowMotora: string;
  rassScale: string;
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
  condutaMedica: string[];
  sinaisVitais: Record<string, string>;
  laboratoriais: Record<string, string>;
  gasometria: Record<string, string>;
}

export const initialFormData: FormData = {
  pacienteNome: "",
  queixas: "",
  exameFisicoFocado: "",
  estadoGeral: "",
  consciencia: "",
  glasgowOcular: "",
  glasgowVerbal: "",
  glasgowMotora: "",
  rassScale: "",
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
  condutaMedica: [
    "Libero Prescrição Médica",
    "Monitoramento de Sinais vitais",
    "Cuidados Gerais e Cuidados de Enfermagem",
    "Restante Mantido",
    "Orientações ao Paciente e/ou Familiares"
  ],
  sinaisVitais: {
    fr: "",
    fc: "",
    sato2: "",
    pas: "",
    pad: "",
    dextro: "",
    temperatura: ""
  },
  laboratoriais: {
    "hemoglobina": "",
    "hematócrito": "",
    "leucócitos": "",
    "plaquetas": "",
    "sódio": "",
    "potássio": "",
    "ureia": "",
    "creatinina": "",
    "pcr": "",
    "mg": "",
    "ca": "",
    "tgo": "",
    "tgp": "",
    "faa": "",
    "ggt": "",
    "bt": "",
    "bd": "",
    "bi": "",
    "inr": ""
  },
  gasometria: {
    "pH": "",
    "PaCO2": "",
    "PaO2": "",
    "HCO3": "",
    "SaO2": "",
    "BE": "",
    "Lactato": ""
  }
};
