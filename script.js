function checkCode() {
  const userInput = document.getElementById("codeInput").value;
  const message = document.getElementById("message");
  const loading = document.getElementById("loading");
  const loadingBar = document.getElementById("loadingBar");

  // Reset everything
  message.textContent = "";
  loading.textContent = "";
  loadingBar.style.width = "0%";
  message.classList.remove("glitch-effect");
  message.removeAttribute("data-text");

  if (userInput === "") {
    const text = "I don't think nothing gives you anything. That's all!";
    message.textContent = text;
    message.style.color = "orange";
    message.setAttribute("data-text", text);
    message.classList.add("glitch-effect");
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
      message.classList.remove("glitch-effect");
      message.removeAttribute("data-text");
      message.innerText = "✅ Congratulations! You've unlocked the Super-Secret Rizzy Glitch Revelation!\n\n...Unfortunately, there's nothing here. You’ve been had.\n\nBut hey, at least you ate some cereal, right?\nThe cereal is all that matters.";
    }, 3000);
  } else {
    const text = "❌ Hey, I think it's wrong. Before you try again, read this -> What are the strongest days of the week? Saturday and Sunday, the rest are weekdays.";
    message.textContent = text;
    message.style.color = "red";
    message.setAttribute("data-text", text);
    message.classList.add("glitch-effect");
  }

  // Apply the glitch effect every 3 seconds
  setInterval(() => {
    if (message.textContent === "❌ Hey, I think it's wrong. Before you try again, read this -> What are the strongest days of the week? Saturday and Sunday, the rest are weekdays." || message.textContent === "I don't think nothing gives you anything. That's all!") {
      message.classList.add("glitch-effect");
    }
  }, 3000); // Every 3 seconds
}

// Allow Enter key to submit
document.getElementById("codeInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkCode();
  }
});
