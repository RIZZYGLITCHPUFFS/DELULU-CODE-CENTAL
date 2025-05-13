function checkCode() {
  const correctCode = "delulu-4-lyfe";
  const userInput = document.getElementById("codeInput").value.toLowerCase();
  const message = document.getElementById("message");
  const loading = document.getElementById("loading");
  const loadingBar = document.getElementById("loadingBar");

  // Reset everything
  message.textContent = "";
  loading.textContent = "";
  loadingBar.style.width = "0%";
  loading.classList.remove("glitch");

  if (userInput === "") {
    message.textContent = "I don't think nothing gives you anything. That's all!";
    message.style.color = "orange";
    return;
  }

  if (userInput === correctCode) {
    loading.textContent = "Authenticating...";
    loading.classList.add("glitch");
    loadingBar.style.width = "100%";
    message.style.color = "#0f0";

    setTimeout(() => {
      loading.textContent = "";
      loadingBar.style.width = "0%";
      loading.classList.remove("glitch");

      message.innerText = "✅ Congratulations! You've unlocked the Super-Secret Rizzy Glitch Revelation!\n\n...Unfortunately, there's nothing here. You’ve been had.\n\nBut hey, at least you ate some cereal, right?\nThe cereal is all that matters.";
    }, 3000);
  } else {
    message.textContent = "❌ Hey, I think it's wrong. Before you try again, read this -> What are the strongest days of the week? Saturday and Sunday, the rest are weekdays.";
    message.style.color = "red";
  }
}

// Allow Enter key to trigger the check
document.getElementById("codeInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkCode();
  }
});
