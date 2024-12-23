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
  auscultaPulmonar: "Murmúrio vesicular presente bilateralmente sem ruídos adventícios",
  auscultaCardiaca: "2 bulhas rítmicas normofonéticas, sem sopro",
  abdomeInspecao: "Abdome Plano",
  abdomePalpacao: "Abdome indolor à palpação",
  abdomeAusculta: "Ausculta abd: RHA presentes normofônicos",
  colaboracao: "Colaborativo",
  contato: "Contactuante",
  fala: "Fala Clara e compreensível",
  pensamento: "Pensamento Lógico e coerente",
  humorAfeto: "Eutímico",
  aceitacaoMedicamentos: "Boa aceitação Medicamentosa",
  perfusaoPeriferica: "Perfusão periférica normal",
  cianose: "Acianótico",
  ictericia: "Anictérico",
  palidez: "Corado",
  hidratacao: "Hidratado",
  estadoNutricional: "Eutrófico",
  mobilidade: "Deambulando normalmente",
  aceitacaoDieta: "Boa aceitação da dieta",
  sono: "Nega alterações do sono",
  urina: "Nega alteração do Hábito Urinário",
  habitoIntestinal: "Nega alterações do Hábito intestinal",
  intercorrencias: "Não houveram intercorrências nas ultimas 24h",
  acompanhante: "Com acompanhante",
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