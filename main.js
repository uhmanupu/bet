document.addEventListener('DOMContentLoaded', () => {
  const betButtons = document.querySelectorAll('.btn.bet');
  const resultDiv = document.getElementById('simulation-result');

  betButtons.forEach(button => {
    button.addEventListener('click', () => {
      const team = button.getAttribute('data-team');
      const isSuccess = Math.random() < 0.35; // 35% de chance de "vitória"

      resultDiv.innerHTML = isSuccess
        ? `🎉 Parabéns! Sua aposta em <strong>${team}</strong> foi bem-sucedida! (Resultado simulado)`
        : `😞 Sua aposta em <strong>${team}</strong> não foi sorteada. Tente novamente!`;

      resultDiv.className = `simulation-result ${isSuccess ? 'success' : 'fail'}`;
      
      // Scroll suave até o resultado
      resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
});
