// script.js

 

// Lista de ícones para o jogo

const icons = ['🍎', '🍌', ' 🍇', '🍉', '🍒', ' 🍓', '🍍', '🥝'];

 

// Duplica os ícones para criar os pares

let cardArray = icons.concat(icons);

 

// Embaralha as cartas

cardArray.sort(() => 0.5 - Math.random());

 

// Seleciona o tabuleiro do jogo

const gameBoard = document.getElementById('game-board');

 

// Cria as cartas no tabuleiro

cardArray.forEach(icon => {

    const card = document.createElement('div');

    card.classList.add('card');

    card.dataset.icon = icon;

    gameBoard.appendChild(card);

});

 

// Variáveis para controle do jogo

let firstCard, secondCard;

let hasFlippedCard = false;

let lockBoard = false;

 

// Adiciona o evento de clique às cartas

gameBoard.addEventListener('click', event => {

    const clickedCard = event.target;

 

    if (lockBoard) return;

    if (clickedCard === firstCard) return;

 

    clickedCard.classList.add('flipped');

    clickedCard.textContent = clickedCard.dataset.icon;

 

    if (!hasFlippedCard) {

        // Primeiro clique

        hasFlippedCard = true;

        firstCard = clickedCard;

    } else {

        // Segundo clique

        hasFlippedCard = false;

        secondCard = clickedCard;

 

        // Verifica se as cartas são iguais

        if (firstCard.dataset.icon === secondCard.dataset.icon) {

            // Cartas iguais

            firstCard.classList.add('matched');

            secondCard.classList.add('matched');

            resetBoard();

        } else {

            // Cartas diferentes

            lockBoard = true;

            setTimeout(() => {

                firstCard.classList.remove('flipped');

                secondCard.classList.remove('flipped');

                firstCard.textContent = '';

                secondCard.textContent = '';

                resetBoard();

            }, 1000);

        }

    }

});

 

function resetBoard() {

    [hasFlippedCard, lockBoard] = [false, false];

    [firstCard, secondCard] = [null, null];

}