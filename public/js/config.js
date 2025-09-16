// Captura dos elementos
const customCssInput = document.getElementById("customCss");
const obsUrlInput = document.getElementById("obsUrl");

// Pega todos os elementos do DOM
const chatPreview = document.getElementById('chatPreview');

const usernameFont = document.getElementById('usernameFont');
const usernameColor = document.getElementById('usernameColor');
const usernameBg = document.getElementById('usernameBg');
const usernameBgTransparent = document.getElementById('usernameBgTransparent');
const usernameSize = document.getElementById('usernameSize');
const usernameWeight = document.getElementById('usernameWeight');

const messageFont = document.getElementById('messageFont');
const messageColor = document.getElementById('messageColor');
const messageBg = document.getElementById('messageBg');
const messageBgTransparent = document.getElementById('messageBgTransparent');
const messageSize = document.getElementById('messageSize');
const messageWeight = document.getElementById('messageWeight');

const badges = document.getElementById('badges');
const blackIcons = document.getElementById('blackIcons');
const fade = document.getElementById('fade');
const spacing = document.getElementById('spacing');
const margins = document.getElementById('margins');
const rotateX = document.getElementById('rotateX');
const rotateY = document.getElementById('rotateY');
const rotateZ = document.getElementById('rotateZ');

// Valores iniciais de CSS dinâmico
let config = {
    spacing: 10,
    margins: 10,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    usernameFont: "Roboto",
    usernameColor: "#66cfff",
    usernameBg: "transparent",
    usernameSize: "16px",
    usernameWeight: 600,
    messageFont: "Roboto",
    messageColor: "#fff",
    messageBg: "transparent",
    messageSize: "16px",
    messageWeight: 400
};

// Atualiza CSS em tempo real
function updateCSS() {
    const css = `
@import url('https://fonts.googleapis.com/css2?family=${config.usernameFont}&display=swap');
@import url('https://fonts.googleapis.com/css2?family=${config.messageFont}&display=swap');

.custom .chat-message {
  margin: ${config.margins} 0; /* top/bottom */
  margin-bottom: ${config.spacing};
  transform: rotateX(${config.rotateX}deg) rotateY(${config.rotateY}deg) rotateZ(${config.rotateZ}deg);
}

.custom .username input {
  font-family: '${config.usernameFont}', sans-serif;
  color: ${config.usernameColor};
  background: ${config.usernameBg};
  font-size: ${config.usernameSize};
  font-weight: ${config.usernameWeight};
  border-radius: 4px;
  padding: 2px 4px;
}

.custom .chat-message {
  font-family: '${config.messageFont}', sans-serif;
  color: ${config.messageColor};
  background: ${config.messageBg};
  font-size: ${config.messageSize};
  font-weight: ${config.messageWeight};
  border-radius: 4px;
  padding: 4px 6px;
}
  `;

    // Atualiza textarea CSS
    customCssInput.value = css.trim();

    // Aplica no preview
    let styleTag = document.getElementById("dynamicStyle");
    if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "dynamicStyle";
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = css;
}

function updateConfig(id, value) {
  if (id === "usernameBgTransparent") {
    config.usernameBg = value ? "transparent" : usernameBg.value;
  } else if (id === "messageBgTransparent") {
    config.messageBg = value ? "transparent" : messageBg.value;
  } else {
    config[id] = value;
  }
  updateCSS();
}

// Listeners para os controles
document.querySelectorAll(".config-panel input").forEach(input => {
  input.addEventListener("input", e => {
    const id = e.target.id;
    let value;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
      if (id.includes("Size") || id === "spacing" || id === "margins") {
        value += "px";
      }
    }

    updateConfig(id, value);
  });
});

// Botão copiar CSS
function copyCss() {
    navigator.clipboard.writeText(customCssInput.value);
}

// Botão copiar URL
function copyUrl() {
    const twitchInput = document.getElementById("twitchUser");
    const channel = twitchInput.value.trim(); // pega o valor digitado
    if (!channel) {
        alert("Digite um nome de canal primeiro!");
        return;
    }
    const url = `${window.location.origin}/chat.html?channel=${channel}`;
    obsUrlInput.value = url;
    navigator.clipboard.writeText(url);
    // alert("Overlay URL copiado!");
}

// Inicia CSS
updateCSS();
