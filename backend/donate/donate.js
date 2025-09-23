// Mostrar/esconder QR Code Pix
document.getElementById("pixBtn").addEventListener("click", () => {
  document.getElementById("pixArea").classList.toggle("hidden");
});

// Simulação de PayPal
document.querySelectorAll(".paypal-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let amount = btn.dataset.amount;
    alert("Doando via PayPal: R$ " + amount);
    // Aqui você chamaria a API do PayPal
  });
});

document.getElementById("paypalDonate").addEventListener("click", () => {
  let custom = document.getElementById("customAmount").value;
  if (custom) {
    alert("Doando via PayPal: R$ " + custom);
    // Chamar PayPal API
  }
});

// Capturar mensagem e salvar
document.getElementById("finalizarDonate").addEventListener("click", () => {
  let msg = document.getElementById("donateMessage").value;
  
  // Exemplo salvando em JSON local (poderia enviar via backend também)
  let donateData = {
    mensagem: msg,
    data: new Date().toISOString()
  };
  
  console.log("Dados do donate:", donateData);
  
  // Simulação de salvar (backend real seria com fetch API)
  // fetch("/salvar-donate", { method: "POST", body: JSON.stringify(donateData) })
  
  alert("Obrigado pela doação! ❤️");
});
