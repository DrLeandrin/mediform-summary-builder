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
  }
};
