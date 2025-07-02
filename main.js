const quotes = [
    'Desconheço um melhor sentido de vida que perecer o grande e impossível',
    'O facto de algo parecer impossível não é razão para não o procurar, é exatamente isso que o faz valer a pena segui-lo',
    'O único falhanço é diminuires-te perante os desafios da vida',
    'Masteria não se trata de dominar a natureza ou outras pessoas, mas sim o nosso mundo',
    'Deixa de ser tão simpático, confia no seu génio inato e nas ideias que serve',
    'A atividade criativa inclui o eu inteiro, de se entrar num estado de elevação onde há harmonia entre emoções, energia, caráter e mente',
    'As ideas nascem das emoções',
    'Em dúvida foque-se nas coisas que sabe fazer bem, expanda para fora a partir do centro',
    'Os problemas devem ser expandidos e irrompidos, ou penetrados através da criatividade',
    'É uma justiça cósmica, a regressão à média',
    'A maneira de recuperar o sentido da vida é recuperar o poder da experiência'   
]

function quoteGenerator() {
    const quoteIndex = Math.floor(Math.random()*quotes.length);
    return 'Generator of Wisdom: ' + quotes[quoteIndex];
}

console.log(quoteGenerator());