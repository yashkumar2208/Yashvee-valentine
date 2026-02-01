const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

let scale = 1;

function escape() {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 80 - 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  scale += 0.12;
  yesBtn.style.transform = `scale(${scale})`;
}

noBtn.addEventListener("mouseover", escape);
noBtn.addEventListener("touchstart", escape);

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yayyy 🥹❤️<br>See you on the 14th, Sukoooon 💖";
  noBtn.style.display = "none";
});
