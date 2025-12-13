// Dados fictícios de jogos
const mockMatches = [
  {
    id: 1,
    home: "Brasil",
    away: "Argentina",
    odds: { home: 1.85, draw: 3.40, away: 4.20 },
    sport: "Futebol"
  },
  {
    id: 2,
    home: "Manchester City",
    away: "Liverpool",
    odds: { home: 1.60, draw: 3.80, away: 5.00 },
    sport: "Futebol"
  },
  {
    id: 3,
    home: "Lakers",
    away: "Warriors",
    odds: { home: 1.90, away: 1.90 },
    sport: "Basquete"
  },
  {
    id: 4,
    home: "Real Madrid",
    away: "Barcelona",
    odds: { home: 2.10, draw: 3.50, away: 3.20 },
    sport: "Futebol"
  }
];

// Função para renderizar os jogos
function renderMatches() {
  const container = document.getElementById('matches-container');
  container.innerHTML = '';

  mockMatches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    let actionsHTML = '';
    if (match.odds.draw !== undefined) {
      actionsHTML = `
        <button class="btn bet" data-team="${match.home}" data-match="${match.id}">Apostar</button>
        <button class="btn bet" data-team="Empate" data-match="${match.id}">Empate (${match.odds.draw})</button>
        <button class="btn bet" data-team="${match.away}" data-match="${match.id}">Apostar</button>
      `;
    } else {
      actionsHTML = `
        <button class="btn bet" data-team="${match.home}" data-match="${match.id}">Apostar</button>
        <button class="btn bet" data-team="${match.away}" data-match="${match.id}">Apostar</button>
      `;
    }

    card.innerHTML = `
      <div class="match-teams">
        <div class="team">
          <span class="team-name">${match.home}</span>
          <span class="odds">${match.odds.home}</span>
        </div>
        <div class="vs">VS</div>
        <div class="team">
          <span class="team-name">${match.away}</span>
          <span class="odds">${match.odds.away}</span>
        </div>
      </div>
      <div class="match-actions">
        ${actionsHTML}
      </div>
    `;

    container.appendChild(card);
  });

  // Adiciona listeners nos botões
  document.querySelectorAll('.btn.bet').forEach(btn => {
    btn.addEventListener('click', handleBet);
  });
}

// Lida com a simulação da aposta
function handleBet(e) {
  const team = e.target.getAttribute('data-team');
  const matchId = e.target.getAttribute('data-match');
  const isSuccess = Math.random() < 0.35; // 35% de chance

  const message = isSuccess
    ? `🎉 Simulação bem-sucedida! Sua aposta em <strong>${team}</strong> "venceu"!`
    : `😞 Sua aposta em <strong>${team}</strong> não foi sorteada. Tente outra!`;

  const resultDiv = document.getElementById('simulation-result');
  resultDiv.innerHTML = message;
  resultDiv.className = `simulation-result ${isSuccess ? 'success' : 'fail'}`;

  // Rolar suavemente até o resultado
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Inicializa tudo quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  renderMatches();
});
