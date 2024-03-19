let OP = document.querySelectorAll(".IMG");
let Cc = document.querySelector(".ComT");
let Play = document.querySelector(".Play");

let OPTIONS1 = ["👊", "🤚", "✌️"];

Play.addEventListener("click", () => {
  let x = Math.random() * 2;
  x = x.toFixed(0);
  Cc.innerHTML = `<p class='ComT'>${OPTIONS1[x]}</p>`;
  ShowWinner(x);
});
let ShowWinner = (x) => {
  let Co = document.querySelector(".IMG");
  let Winner = document.createElement("p");
  Winner.innerHTML = "<p class='POP'>YOU ARE THE WINNER</p>";
  Winner.after(Co);
};

OP.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("LogoBorder");
  });
});
