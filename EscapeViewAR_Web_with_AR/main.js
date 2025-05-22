document.getElementById("start-btn").onclick = () => {
  document.getElementById("game").style.display = "block";
};

const validCodes = ["escape42", "libertad", "pista123"];
const hints = [
  "Mira debajo de la mesa virtual.",
  "Escanea la pista junto al cartel.",
  "Revisa los objetos brillantes en AR."
];

document.getElementById("submit-code").onclick = () => {
  const code = document.getElementById("code-input").value.trim().toLowerCase();
  const output = document.getElementById("output");
  if (validCodes.includes(code)) {
    output.textContent = "✅ ¡Código correcto! Has desbloqueado una pista.";
  } else {
    output.textContent = "❌ Código incorrecto. Intenta de nuevo.";
  }
};

document.getElementById("hint-btn").onclick = () => {
  const output = document.getElementById("output");
  const randomHint = hints[Math.floor(Math.random() * hints.length)];
  output.textContent = "💡 Pista: " + randomHint;
};

document.getElementById("scan-btn").onclick = () => {
  const output = document.getElementById("output");
  output.textContent = "🔍 Escaneo simulado... (en versión final será AR real)";
};
