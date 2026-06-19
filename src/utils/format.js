// Cores oficiais que o GitHub usa para cada linguagem.
// Usamos a cor real como informação visual: a bolinha ao lado do repositório
// já diz qual a linguagem principal antes mesmo de ler o texto.
export const coresLinguagens = {
  JavaScript: '#F1E05A',
  TypeScript: '#3178C6',
  HTML: '#E34C26',
  CSS: '#563D7C',
  Python: '#3572A5',
  Java: '#B07219',
  'C++': '#F34B7D',
  C: '#555555',
  'C#': '#178600',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#DEA584',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89E051',
  Vue: '#41B883',
}

// Devolve a cor da linguagem, ou um cinza neutro se não estiver no mapa.
export function corDaLinguagem(linguagem) {
  return coresLinguagens[linguagem] || '#8B949E'
}

// Transforma uma data ISO ("2024-03-01T...") em texto relativo em português,
// tipo "há 3 dias" ou "há 2 meses".
export function tempoRelativo(dataISO) {
  const agora = new Date()
  const data = new Date(dataISO)
  const segundos = Math.floor((agora - data) / 1000)

  const intervalos = [
    { limite: 60, divisor: 1, singular: 'segundo', plural: 'segundos' },
    { limite: 3600, divisor: 60, singular: 'minuto', plural: 'minutos' },
    { limite: 86400, divisor: 3600, singular: 'hora', plural: 'horas' },
    { limite: 2592000, divisor: 86400, singular: 'dia', plural: 'dias' },
    { limite: 31536000, divisor: 2592000, singular: 'mês', plural: 'meses' },
    { limite: Infinity, divisor: 31536000, singular: 'ano', plural: 'anos' },
  ]

  for (const item of intervalos) {
    if (segundos < item.limite) {
      const valor = Math.max(1, Math.floor(segundos / item.divisor))
      const unidade = valor === 1 ? item.singular : item.plural
      return `há ${valor} ${unidade}`
    }
  }
}

// Formata números grandes: 1500 vira "1.5k".
export function formatarNumero(numero) {
  if (numero >= 1000) {
    return `${(numero / 1000).toFixed(1).replace('.0', '')}k`
  }
  return String(numero)
}
