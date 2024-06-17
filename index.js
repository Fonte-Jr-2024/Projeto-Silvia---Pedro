document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.custom-header');
    const numBalls = 50; // número de bolinhas
    const colors = ['#543d29', '#7e5e3d', '#a0815c']; // cores para as bolinhas

    // Função para gerar um número aleatório dentro de um intervalo
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Cria as bolinhas de forma aleatória
    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement('div');
      ball.classList.add('ball');
      ball.style.background = colors[Math.floor(random(0, colors.length))];
      ball.style.width = `${random(5, 20)}px`;
      ball.style.height = ball.style.width;
      ball.style.left = `${random(0, 100)}vw`; // posição horizontal aleatória
      ball.style.top = `${random(-50, 100)}vh`; // posição vertical aleatória
      ball.style.animationDuration = `${random(1, 4)}s`; // duração da animação aleatória
      ball.style.animationDelay = `${random(0, 2)}s`; // atraso da animação aleatório
      header.appendChild(ball);
    }
  });