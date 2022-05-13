const cardArray = [
    {
        name: 'fries',
        img: './imagens/fries.png'
    },

    {
        name: 'chesseburguer',
        img: './imagens/chesseburguer.png'
    },

    {
        name: 'ice-cream',
        img: './imagens/ice-cream.png'
    },

    {
        name: 'pizza',
        img: './imagens/pizza.png'
    },

    {
        name: 'milkshake',
        img: './imagens/milkshake.png'
    },

    {
        name: 'hotdog',
        img: './imagens/hotdog.png'
    },

    {
        name: 'fries',
        img: './imagens/fries.png'
    },

    {
        name: 'chesseburguer',
        img: './imagens/chesseburguer.png'
    },

    {
        name: 'ice-cream',
        img: './imagens/ice-cream.png'
    },

    {
        name: 'pizza',
        img: './imagens/pizza.png'
    },

    {
        name: 'milkshake',
        img: './imagens/milkshake.png'
    },

    {
        name: 'hotdog',
        img: './imagens/hotdog.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())  //Deixando array random

const gridDisplay = document.querySelector('#grid')

function createBoard (){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', './imagens/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        console.log(card, i)
    }
}

createBoard()

function flipCard(){
    console.log(cardArray)
   let cardId = this.getAttribute('data-id')
   console.log(cardArray[cardId].name)
   console.log('clicked',cardId)
}