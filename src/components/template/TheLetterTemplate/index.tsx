import { Poem } from '@components/group/text/Poem'

export function TheLetterTemplate() {
  const theLetterArray = [
    [
      'A flor mais radiante da estação',
      'Que de tão linda que já era',
      'Trouxe consigo a primavera',
      'Tornando um ébrio este beija-flor',
      'Maravilhado com o seu odor',
      'Sem imaginar o que o espera'
    ],
    [
      'Cá estou eu, o beija-flor',
      'Escrevendo para ela',
      'Que é a minha primavera',
      'Porém agora ela está no outono',
      'O que me causa um transtorno',
      'Que por vê-la tão longe assim me desespera'
    ],
    [
      'Somente em meus devaneios tu sempre está',
      'Enquanto penso em ti não percebo o tempo passar',
      'É frustrante apenas poder imaginar',
      'Teus lábios macios, tu em meus braços',
      'Teu cheiro gostoso, sentir o calor dos teus abraços',
      'Só sinto novamente nas minhas lembranças, ou dormindo, quando estou a sonhar'
    ],
    [
      'Sou alguém mais racional, de lógica',
      'Não sou artista nem cantor',
      'Não sou desenhista nem compositor',
      'Mas aos meus olhos, tu, tão encantadora',
      'Sempre foi minha musa inspiradora',
      'Que transforma-me em um apaixonado sonhador'
    ],
    [
      'Quando não me reconhecer no espelho devido aos sintomas do tempo',
      'Não quero com tristeza recordar do que deixei passar',
      'Sem contigo minhas experiências compartilhar',
      'Seja por não conversarmos abertamente',
      'Ou por ser inconsequente',
      'Por isso não vou desistir de contigo estar'
    ],
    [
      'Quero me tornar o teu porto seguro',
      'Te divertir quando estiver entediada',
      'Te fazer cafuné quando estiver estressada',
      'Te ajudar quando não tiver certeza',
      'Te abraçar quando sentir tristeza',
      'Para se sentir segura e apoiada'
    ],
    [
      'Sou cético por muitas coisas',
      'Uma delas o amor à primeira vista',
      'Ele não surge logo que se conquista',
      'Se constrói na convivência',
      'Quando dos defeitos se tem ciência',
      'Dessa forma, por inteiro sendo aceita'
    ],
    [
      'Sendo assim me declaro',
      'Apaixonado desde que comecei a te imaginar',
      'Querendo do seu lado sempre estar',
      'Brigando ou brincando',
      'Te beijando ou te abraçando',
      'Mas sempre, aprendendo a te amar!'
    ]
  ]

  return (
    <main className='w-dvw h-dvh'>
      <article className='w-full h-full'>
        <section className='bg-cyan-50 flex flex-col gap-16 items-center justify-center p-8 pt-16'>
          <Poem.Title text='Primavera Distante' />

          <Poem.Container>
            {theLetterArray.map((spanza, spanzaIndex) => (
              <Poem.Stanza key={spanzaIndex}>
                {spanza.map((verse, verseIndex) => (
                  <Poem.Verse key={verseIndex} text={verse} />
                ))}
              </Poem.Stanza>
            ))}
          </Poem.Container>
        </section>
      </article>
    </main>
  )
}
