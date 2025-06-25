const birthday = new Date("July 1, 2025 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");
const giftBox = document.getElementById("gift-box");
const modal = document.getElementById("surprise-modal");
const content = document.getElementById("surprise-content");

const surprises = [
  "🎉 Happy Birthday, My BBF Taala!",
  "💌 Remember how we used to matched outfits?",
  "💌 You’re the frosting to my chaotic cake.",
  "💌 Today’s your day, and you deserve every smile.",
  "💌 You're the best ftind i ever met",
  "💌 I wish you all luck",
  "💌 Another year older, wiser, and more wonderful. I’m so grateful for you and all the memories we’ve shared.",
  "💌 I love you with my whole heart",
  "💌 Thank you for all the support and sweet memories",
  "💌 Happy birthday to the one who made me laugh so hard",
];

let surpriseIndex = 0;

function updateCountdown() {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "🎈 It's your birthday!";
    giftBox.classList.remove("disabled");
    giftBox.classList.add("active");
    giftBox.onclick = showNextSurprise;
  } else {
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    countdownEl.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }
}

function showNextSurprise() {
  modal.classList.remove("hidden");
  content.innerText = surprises[surpriseIndex];
  surpriseIndex = (surpriseIndex + 1) % surprises.length;

  modal.classList.remove("animate");
  void modal.offsetWidth; // force reflow
  modal.classList.add("animate");

  confetti();
}



setInterval(updateCountdown, 1000);
