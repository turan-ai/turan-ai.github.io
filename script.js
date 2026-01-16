const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
  const userText = userInput.value.trim();
  if (!userText) return;

  // Kullanıcının mesajını göster
  const userMsg = document.createElement('div');
  userMsg.textContent = "Sen: " + userText;
  chatBox.appendChild(userMsg);

  userInput.value = "";

  // AI'nin yanıtını simüle et
  setTimeout(() => {
    const aiMsg = document.createElement('div');
    aiMsg.textContent = "Turan AI: " + generateResponse(userText);
    chatBox.appendChild(aiMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
});

function generateResponse(input) {
  // Şimdilik basit örnek yanıtlar
  if (input.includes("merhaba")) return "Merhaba! Ben Turan AI, sana nasıl yardımcı olabilirim?";
  if (input.includes("nasılsın")) return "İyiyim, teşekkürler! Sen nasılsın?";
  return "Bunu anlamadım ama öğrenebilirim!";
}
