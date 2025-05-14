function checkCode() {
  const userInput = document.getElementById("codeInput").value;
  const message = document.getElementById("message");
  const loading = document.getElementById("loading");
  const loadingBar = document.getElementById("loadingBar");
  const frag = document.getElementById("glitchFragment");

  message.textContent = "";
  loading.textContent = "";
  loadingBar.style.width = "0%";
  frag.textContent = "";
  clearInterval(window._glitchInterval);

  if (userInput === "") {
    const text = "I don't think nothing gives you anything. That's all!";
    message.textContent = text;
    message.style.color = "orange";
    triggerLoopedGlitch(text);
    return;
  }

  if (userInput === "delulu-4-lyfe" || userInput === "DELULU-4-LYFE") {
    loading.textContent = "Authenticating...";
    loadingBar.style.width = "100%";
    loading.style.color = "#0f0";
    message.style.color = "#0f0";

    setTimeout(() => {
      loading.textContent = "";
      loadingBar.style.width = "0%";
      message.textContent = "✅ Congratulations! You've unlocked the Super-Secret Rizzy Glitch Revelation!\n\n...Unfortunately, there's nothing here. You’ve been had.\n\nBut hey, at least you ate some cereal, right?\nThe cereal is all that matters.";
    }, 3000);
  } else {
    const text = "❌ Hey, I think it's wrong. Before you try again, read this -> What are the strongest days of the week? Saturday and Sunday, the rest are weekdays.";
    message.textContent = text;
    message.style.color = "red";
    triggerLoopedGlitch(text);
  }
}

function triggerLoopedGlitch(text) {
  const message = document.getElementById("message");
  const frag = document.getElementById("glitchFragment");
  message.textContent = text;
  frag.textContent = text;

  window._glitchInterval = setInterval(() => {
    message.classList.add("glitch-active");
    setTimeout(() => {
      message.classList.remove("glitch-active");
    }, 750);
  }, 3750);
}

document.getElementById("codeInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkCode();
  }
});
