import { Kalam } from 'next/font/google'

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})
export const font = kalam.style.fontFamily

export const inkColor = '#3a1a08'
export const accent = '#8a5530'
export const softAccent = 'rgba(138,85,48,0.65)'

export const pageBackground = {
  backgroundColor: '#fdf4ec',
  backgroundImage: [
    'radial-gradient(ellipse at 15% 10%, rgba(220,155,90,0.20) 0%, transparent 45%)',
    'radial-gradient(ellipse at 85% 88%, rgba(210,135,70,0.16) 0%, transparent 40%)',
    'radial-gradient(ellipse at 50% 50%, rgba(255,240,215,0.45) 0%, transparent 65%)'
  ].join(',')
}

export const titlePhrase =
  'Esse é o nosso primeiro de muitos dias dos namorados juntos. Mesmo estando longe agora, nos próximos estaremos pertinho um do outro'

export const phrases = [
  'Teu jeito carinhoso é encantador, sempre me deseja boa noite e bom descanso, parece bobo, mas não consigo imaginar uma noite boa sem essas simples palavras',
  'Quero bagunçar o teu cabelo, só pra te ver brava comigo',
  'Consegue facilmente me deixar com muito tesão',
  'Quero te fazer rir e ouvir tuas risadas mais singelas',
  'Quero sentir tuas mãos passeando pelo meu corpo',
  'Gosto muito da tua pele clara e sem bronze, me encanto com a beleza dela',
  'Quero poder beijar tua mão sempre que tocá-la, pra te dizer que estou aqui pra ti',
  'Quero que tu me deseje e olhe pra mim como se quisesse me devorar',
  'Tua pele é linda',
  'Quero sentir o teu calor em cada abraço e em cada conchinha',
  'Quero poder carregar tuas compras sempre',
  'Tu és como a primavera, deixa qualquer lugar muito mais colorido',
  'Quero poder te admirar enquanto experimenta indecisa inúmeras roupas',
  'Quero te deixar quentinha em noites frias',
  'Alegra o meu dia apenas com tua presença',
  'Quero te buscar onde tiver, principalmente em dias de chuva',
  'Quero caminhar contigo enquanto ouvimos os passarinhos e conversamos sobre coisas simples',
  'Me deixa emocionado onvindo tuas palavras',
  'Quero massagear teus pés pra ajuda a te relaxar',
  'Quero te fazer cafuné todos os dias',
  'Tu és divertida, não me canso de passar meu tempo contigo',
  'Quero conversar contigo sentada no meu colo',
  'Quero te abraçar quando estivermos sentados, pra fazer tu se sentir como se estivesse num casulo, protegida de tudo',
  'Tu se veste muito bem, com elegância e charme único',
  'Quero te ver enquanto pinta algum quadro',
  'Quero conversar contigo enquanto cozinhamos',
  'Tens um sorriso lindo',
  'Quero fazer café da manhã pra ti',
  'Quero te ver toda alegre e contente ao comer um doce que gosta',
  'Gosto muito do teu cheirinho',
  'Quero sentir os teus beijos no meu pescoço',
  'Quero poder tomar banho contigo inúmeras vezes',
  'Me encanto com teu nariz, principalmente quando tá com a ponta rosada no frio',
  'Quero te ver sair do banho de cabelo molhado e te ter quentinha nos meus braços após vestir teu pijama',
  'Quero te ver usando minhas camisetas ou meus moletons',
  'Gosto muito dos teus lindos olhos esmeraldas',
  'Quero te ver só de camisa social, grande o suficiente pra fazer um mistério sem mostrar nada, mas te deixando sexy',
  'Quero te ouvir cantar',
  'Tu és muito atraente, não me canso de admirar',
  'Tu és tão fofa, adoro tuas reações quando te surpreendo',
  'Tu és delicada, isso me atrai tanto, desde tuas roupas e maquiagens até teu jeito de falar e escrever',
  'Me encanta com teus pensamentos profundos, gosto muito que nós conseguimos ter conversas mais sérias e complexas',
  'Tu tens um charme hipnotizante',
  'Tu és a mais bela pintura que eu poderia imaginar',
  'Admiro teus ideais e crenças lindas, mesmo que eu possa discordar algo',
  'Tens a beleza delicada de uma bela flor',
  'Tua voz é tão aconchegante e agradável',
  'Teu corpo é tão lindo e atraente',
  'Quero quebrar o tédio dos teus dias',
  'Sempre que precisar terás meu apoio',
  'Vou ser o teu lobo, fiel por toda a vida',
  'Quero que tu seja sempre a primeira coisa que eu vejo no meu dia',
  'Me sinto realizado por poder ter o privelégio de aproveitar tua presença',
  'Vamos conhecer diversos lugares diferentes contigo',
  'Quero que tu seja sempre quem vai ouvir as últimas palavras do meu dia antes de dormir',
  'Vamos passar belos dias juntos, acompanhados de nossa conversa, música e chimarrão',
  'Quero fazer tu se sentir bem e realizada',
  'Tua risada é muito fofa e reconfortante',
  'Quero te dar emoções que façam tu se lembrar de mim pra sempre',
  'Teu olhar me hipnotiza, me perco te olhando e não percebo o tempo passar',
  'Fica tão linda de cabelo preso',
  'Quero ter o privilégio de ver e conhecer coisas sobre ti que só eu sei',
  'De vez em quando penso um pouco mais devagar em conversas, e gosto de como tu tens paciência pra me ouvir falando nesses momentos também',
  'Gosto muito de como tu se maquia',
  'Quero aprender e decorar cada parte do teu corpo',
  'Tens sobrancelhas que parecem desenhadas de tão bonitas',
  'Quero fazer tu se sentir bem e te fazer bem sempre',
  'Teus lábios são tão atraentes, tem o formato perfeito',
  'Quero te ouvir contar sobre o teu dia todos os dias, do detalhe mais bobo ao momento mais emocionante',
  'Quero poder ver teu sorriso todos os dias',
  'Tuas bochechas são tão fofas, decoram o teu rosto de forma tão bela, ainda mais quando estão rosadas, seja por calor ou por frio ou por vergonha',
  'Quero criar costumes que façam tu sentir minha falta quando não estiver por perto',
  'Teu sorriso é tão brilhante. Se torna ainda mais cativante quando mostra os dentes e teus olhos sorriem junto',
  'Gosto muito de como tu muda de assunto com facilidade nas nossas conversas',
  'Fica tão fofa com os olhos um pouco mais fechados quando está no sol está forte',
  'Gosto muito do brilho dourado do teu cabelo',
  'Quero cantar pra ti e ver tu me admirando com um olhar apaixonado',
  'Quero te ajudar com os teus sonhos',
  'Tu fica linda de óculos',
  'Quero te encher de lembranças e presentes pra não se sentir sozinha quando eu não estiver por perto',
  'Me sinto bem contigo',
  'Quero te tratar bem e fazer tu se sentir uma princesa',
  'Gosto de como me sinto ao estar sempre melhorando quando tô contigo. Tu me faz ser melhor',
  'Apesar de eu não saber como reagir, fico sempre meio bobo e alegre com teus elogios e declarações',
  'Gosto muito de quando diz coisas que faço que te deixam bem ou fazem tu se sentir melhor',
  'Quero planejar nossos sonhos juntos',
  'Me sinto à vontade contigo e seguro pra falar sobre qualquer coisa',
  'Quero ter muitos cafés da tarde contigo, com pão caseiro',
  'Gosto de como me sinto cuidado por ti',
  'Tu és elegante, teu jeito junto com a forma que se veste, é uma combinação perfeita',
  'Quero fazer tu se sentir a mulher mais gostosa e linda que existe',
  'Fico feliz por ser admirado por ti',
  'Quero ser o silêncio reconfortante que te deixa à vontade',
  'Vou ser teu porto seguro, teu caminho quando tiver perdida',
  'Nos teus dias tristes, quero te abraçar pra não se sentir sozinha',
  'Quero te dar oi e tchau com beijo sempre que formos ficar algumas horas longe',
  'Gosto muito que tua altera seja bem próxima a minha, deixam nossos abraços e beijos perfeitos',
  'Quero acabar com teus estresses, enquanto desabafadas recebendo meu cafuné',
  'Tu é muito atraente e quando de te vejo de saia deixa minha imaginação a mil',
  'Quero ver todas as tuas faces e jeitos'
]

const START_UTC = Date.UTC(2026, 5, 12) // June 12, 2026 — reference as UTC midnight

export const START = new Date(START_UTC)

export function getDayIndex(): number {
  const [year, month, day] = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
    .format(new Date())
    .split('-')
    .map(Number)

  const todayUTC = Date.UTC(year, month - 1, day)
  return Math.floor((todayUTC - START_UTC) / 86_400_000)
}

export function phraseDate(dayIndex: number): Date {
  const d = new Date(START)
  d.setDate(d.getDate() + dayIndex)
  return d
}

export function formatDate(d: Date, short = false): string {
  if (short)
    return d.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit'
    })
  return d.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long'
  })
}
