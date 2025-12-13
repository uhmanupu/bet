function simularAposta(aposta) {
  const resultado = document.getElementById("resultado");
  const sorteio = Math.random();
  let msg;

  if (sorteio < 0.3) {
    msg = `🎉 Parabéns! Sua aposta "${aposta}" venceu! (Resultado fictício)`;
  } else {
    msg = `😞 Sua aposta "${aposta}" não foi sorteada. Tente novamente! (Simulação apenas)`;
  }

  resultado.innerHTML = `<p><strong>Simulação:</strong> ${msg}</p>`;
  resultado.style.display = "block";
}
