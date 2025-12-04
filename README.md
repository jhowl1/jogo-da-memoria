# Jogo-da-Memoria
Estrutura HTML
A estrutura HTML é simples e contém:

Um contêiner principal (div.game-container) que centraliza o conteúdo.

Um título (h1).

Um tabuleiro de jogo (div.game-board) onde as cartas serão exibidas.

Estilo com CSS
O CSS é utilizado para estilizar a página de forma agradável:

Centralização do contêiner na tela.

Estilo para o tabuleiro e as cartas.

Diferenciação das cartas viradas e combinadas com cores diferentes.

JavaScript
O JavaScript faz toda a funcionalidade do projeto:

Cria um array de ícones para as cartas.

Duplica e embaralha os ícones para criar pares.

Gera as cartas no tabuleiro.

Controla a lógica do jogo, incluindo virar cartas, verificar pares e resetar o tabuleiro.

Configuração Inicial:

Duplicação e embaralhamento dos ícones para criar pares e distribuição aleatória no tabuleiro.

Criação das Cartas:

Geração dinâmica das cartas no tabuleiro utilizando um loop que percorre o array de ícones.

Controle do Jogo:

Variáveis para controle de estado do jogo (firstCard, secondCard, hasFlippedCard, lockBoard).

Evento de clique nas cartas para controlar a lógica de virar, verificar pares e resetar o tabuleiro.

Verificação e Comparação:

Verifica se as duas cartas viradas são iguais ou diferentes.

Se iguais, marca as cartas como combinadas.

Se diferentes, vira as cartas de volta após um curto intervalo.

Reset do Tabuleiro:

Reseta as variáveis de controle após cada par de cartas ser verificado.
