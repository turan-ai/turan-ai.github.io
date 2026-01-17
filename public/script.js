const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const themeToggle = document.getElementById("theme-toggle");
const logo = document.getElementById("logo");

// Tema toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  logo.src = document.body.classList.contains("dark") ? "Turanb.png" : "Turanw.png";
});

// Mesaj gönderme
sendBtn.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("Sen", message);
  userInput.value = "";

  const reply = await fetch(`/api/chat?message=${encodeURIComponent(message)}`)
    .then(res => res.json())
    .then(data => data.reply)
    .catch(() => "Turan AI şu an cevap veremiyor.");

  appendMessage("Turan AI", reply);
});

function appendMessage(sender, message) {
  const div = document.createElement("div");
  div.innerHTML = `<b>${sender}:</b> ${message}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
