import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormData } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSummary(data: FormData): string {
  let summary = "";
  
  // Primeira linha
  const linha1 = [
    data.estadoGeral,
    data.consciencia,
    data.palidez,
    data.hidratacao,
    data.cianose,
    data.ictericia,
    data.temperatura,
    data.contato,
    data.colaboracao,
    data.fala,
    data.pensamento,
    data.humorAfeto,
    data.perfusaoPeriferica,
    data.acompanhante,
    data.queixas
  ].filter(Boolean).join(", ");
  if (linha1) summary += linha1 + ".\n";

  // Segunda linha
  const linha2 = [
    data.freqRespiratoria,
    data.torax,
    data.auscultaPulmonar
  ].filter(Boolean).join(", ");
  if (linha2) summary += "AP: " + linha2 + ".\n";

  // Terceira linha
  if (data.auscultaCardiaca) {
    summary += "AC: " + data.auscultaCardiaca + ".\n";
  }

  // Quarta linha
  const linha4 = [
    data.abdomeInspecao,
    data.abdomePalpacao,
    data.abdomeAusculta
  ].filter(Boolean).join(", ");
  if (linha4) summary += "Abd: " + linha4 + ".\n";

  // Quinta linha
  const linha5 = [
    data.aceitacaoMedicamentos,
    data.aceitacaoDieta,
    data.sono,
    data.urina,
    data.habitoIntestinal,
    data.intercorrencias
  ].filter(Boolean).join(", ");
  if (linha5) summary += linha5 + ".\n";

  // Nova linha - Exame Físico Focado
  if (data.exameFisicoFocado) {
    summary += "Exame físico focado: " + data.exameFisicoFocado + ".\n";
  }

  // Sexta linha - Dispositivos
  if (data.dispositivos.length > 0) {
    summary += "Dispositivos: " + data.dispositivos.join(", ") + ".\n";
  }

  // Sétima linha - Sinais vitais
  const sinaisVitais = [];
  if (data.sinaisVitais.fr) sinaisVitais.push(`FR: ${data.sinaisVitais.fr}`);
  if (data.sinaisVitais.fc) sinaisVitais.push(`FC: ${data.sinaisVitais.fc}`);
  if (data.sinaisVitais.satO2) sinaisVitais.push(`SatO2: ${data.sinaisVitais.satO2}`);
  if (data.sinaisVitais.pas && data.sinaisVitais.pad) {
    sinaisVitais.push(`PA: ${data.sinaisVitais.pas}x${data.sinaisVitais.pad}`);
  }
  if (data.sinaisVitais.dextro) sinaisVitais.push(`Dextro: ${data.sinaisVitais.dextro}`);
  if (data.sinaisVitais.temperatura) sinaisVitais.push(`Temperatura: ${data.sinaisVitais.temperatura}`);
  
  if (sinaisVitais.length > 0) {
    summary += "Sinais vitais: " + sinaisVitais.join(", ") + ".\n";
  }

  // Oitava linha - Laboratoriais
  const labs = Object.entries(data.laboratoriais)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key.toUpperCase()}: ${value}`);
  if (labs.length > 0) {
    summary += "Laboratoriais: " + labs.join(", ") + ".\n";
  }

  // Add medical conduct at the end
  if (data.condutaMedica.length > 0) {
    summary += "\nConduta Médica:\n";
    data.condutaMedica.forEach(conduct => {
      summary += `- ${conduct}\n`;
    });
  }

  return summary;
}
