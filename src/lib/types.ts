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
  auscultaPulmonarLocations: string[];
  dispositivos: string[];
  condutaMedica: string[];
  sinaisVitais: Record<string, string>;
  laboratoriais: Record<string, string>;
  gasometria: Record<string, string>;

  // Adding missing properties for AvaliacaoCardioAbdominal
  auscultaCardiaca: string;
  abdomeInspecao: string;
  abdomePalpacao: string;
  abdomeAusculta: string;

  // Adding missing properties for AvaliacaoFisica
  perfusaoPeriferica: string;
  cianose: string;
  ictericia: string;
  palidez: string;
  hidratacao: string;

  // Adding missing properties for AvaliacaoNecessidades
  estadoNutricional: string;
  mobilidade: string;
  aceitacaoDieta: string;
  sono: string;
  urina: string;
  habitoIntestinal: string;
  intercorrencias: string;
  acompanhante: string;

  // Adding missing properties for AvaliacaoNeurologica
  colaboracao: string;
  contato: string;
  fala: string;
  pensamento: string;
  humorAfeto: string;
  aceitacaoMedicamentos: string;
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
  auscultaPulmonarLocations: [],
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
  },

  // Initialize missing properties for AvaliacaoCardioAbdominal
  auscultaCardiaca: "",
  abdomeInspecao: "",
  abdomePalpacao: "",
  abdomeAusculta: "",

  // Initialize missing properties for AvaliacaoFisica
  perfusaoPeriferica: "",
  cianose: "",
  ictericia: "",
  palidez: "",
  hidratacao: "",

  // Initialize missing properties for AvaliacaoNecessidades
  estadoNutricional: "",
  mobilidade: "",
  aceitacaoDieta: "",
  sono: "",
  urina: "",
  habitoIntestinal: "",
  intercorrencias: "",
  acompanhante: "",

  // Initialize missing properties for AvaliacaoNeurologica
  colaboracao: "",
  contato: "",
  fala: "",
  pensamento: "",
  humorAfeto: "",
  aceitacaoMedicamentos: ""
}