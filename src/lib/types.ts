export type FormData = {
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
  sinaisVitais: {
    fr: string;
    fc: string;
    satO2: string;
    pa: string;
    dextro: string;
  };
  laboratoriais: {
    eri: string;
    hb: string;
    ht: string;
    leuco: string;
    plaq: string;
    na: string;
    k: string;
    ur: string;
    cr: string;
    pcr: string;
  };
};

export const initialFormData: FormData = {
  estadoGeral: "Bom estado geral",
  consciencia: "Lúcido e orientado",
  temperatura: "Normotermia",
  freqRespiratoria: "Eupneico",
  torax: "Tórax simétrico",
  auscultaPulmonar: "MV presentes bilateralmente",
  auscultaCardiaca: "BNF 2T sem sopros",
  abdomeInspecao: "Plano",
  abdomePalpacao: "Flácido",
  abdomeAusculta: "RHA presentes",
  colaboracao: "Colaborativo",
  contato: "Contactuante",
  fala: "Fala Clara e compreensível",
  pensamento: "Pensamento Lógico e coerente",
  humorAfeto: "Eutímico",
  aceitacaoMedicamentos: "Boa aceitação",
  perfusaoPeriferica: "Perfusão periférica normal",
  cianose: "Acianótico",
  ictericia: "Anictérico",
  palidez: "Corado",
  hidratacao: "Hidratado",
  estadoNutricional: "Eutrófico",
  mobilidade: "Deambula",
  aceitacaoDieta: "Boa aceitação",
  sono: "Sono preservado",
  urina: "Diurese presente",
  habitoIntestinal: "Regular",
  intercorrencias: "",
  acompanhante: "",
  dispositivos: [],
  sinaisVitais: {
    fr: "",
    fc: "",
    satO2: "",
    pa: "",
    dextro: "",
  },
  laboratoriais: {
    eri: "",
    hb: "",
    ht: "",
    leuco: "",
    plaq: "",
    na: "",
    k: "",
    ur: "",
    cr: "",
    pcr: "",
  },
};