let B1 = document.querySelectorAll("button");
let P1 = true;
let P11 = document.querySelector(".P1")
let P12 = document.querySelector(".P2")
let S = document.querySelector(".start")
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
S.onclick = () => {
    let count =0;
    S.style.visibility="hidden";
    P11.style.backgroundColor="red"
P11.innerText="P1 X"
P12.innerText="P2 0"
for (let R of B1) {
  R.onclick = () => {
    if (P1) {
      R.innerText = "X";
      P12.style.backgroundColor="red"
      P11.style.backgroundColor="rgba(127, 255, 212, 0.66)"
      P1 = false;

    } else {
      R.innerText = "O";
      P11.style.backgroundColor="red"
      P12.style.backgroundColor="rgba(127, 255, 212, 0.66)"
      P1 = true;
    }
    R.disabled=true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
        gameDraw();
      }
  };
}
}
const gameDraw = () => {
    // msg.innerText = `Game was a Draw.`;
    // msgContainer.classList.remove("hide");
    // disableBoxes();
    console.log("DRAW")

  };
  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = B1[pattern[0]].innerText;
      let pos2Val = B1[pattern[1]].innerText;
      let pos3Val = B1[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
        console.log(pos1Val)
          return true;
        }
      }
    }
};


let pooo = document.querySelector(".head");
let eopo = document.createElement("div")
let eo = document.createElement("button")

const showWinner = (W) =>{ 
eopo.innerHTML = `Winner is ${W}`;
// eo.innerHTML = "Re Start"
S.style.visibility="visible";

pooo.after(eopo)
// pooo.after(eo)

disableBoxes();
}
const disableBoxes = () => {
    for (let box of B1) {
      box.disabled = true;
    }
  };
  const enableBoxes = () => {
    for (let box of B1) {
      box.disabled = false;
      box.innerText = "";
    }
  };
// showWinner(10);