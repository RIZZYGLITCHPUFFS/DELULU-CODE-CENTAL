function checkCode() {
  const correctCode = "DELULU-4-LYFE";
  const correctCode2 = "delulu-4-lyfe";
  const userInput = document.getElementById("codeInput").value;
  const message = document.getElementById("message");

  if (userInput === "") {
    message.textContent = "I don't think nothing gives you something. That's all!";
    message.style.color = "orange";
  } else if (userInput === correctCode || userInput === correctCode2) {
    message.textContent = "✅Congratulations! You've unlocked the Super-Secret Rizzy Glitch Revelation! ...Unfortunately, there's nothing here. You've been had! But hey, at least you ate some cereal, right? The cereal is all that matters...";
    message.style.color = "green";
  } else {
    message.textContent = "❌ Hey, I think it's wrong. Before you try again, read this -> What are the strongest days of the week? Saturday and Sunday, the rest are weekdays.";
    message.style.color = "red";
  }
}
