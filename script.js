// DOM Elemanları
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const logo = document.getElementById('logo');
const lightBtn = document.getElementById('light-btn');
const darkBtn = document.getElementById('dark-btn');

// Tema değiştirme
lightBtn.addEventListener('click', () => {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
  logo.src = 'assets/Turanw.png'; // Açık tema logosu
});

darkBtn.addEventListener('click', () => {
  document.body.classList.remove('light');
  document.body.classList.add('dark');
  logo.src = 'assets/Turanb.png'; // Koyu tema logosu
});

// Chat işlevi
sendBtn.addEventListener('click', () => {
  const userText = userInput.value.trim();
  if (!userText) return;

  // Kullanıcı mesajını ekle
  const userMsg = document.createElement('div');
  userMsg.textContent = "Sen: " + userText;
  chatBox.appendChild(userMsg);

  userInput.value = "";

  // AI yanıtını simüle et
  setTimeout(() => {
    const aiMsg = document.createElement('div');
    aiMsg.textContent = "Turan AI: " + generateResponse(userText);
    chatBox.appendChild(aiMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
});

// Basit yanıt fonksiyonu
function generateResponse(input) {
  if (input.toLowerCase().includes("merhaba")) return "Merhaba! Ben Turan AI, sana nasıl yardımcı olabilirim?";
  if (input.toLowerCase().includes("nasılsın")) return "İyiyim, teşekkürler! Sen nasılsın?";
  return "Bunu anlamadım ama öğrenebilirim!";
}
