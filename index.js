let boxes = document.querySelectorAll(".box");
let btnreset = document.querySelector(".resetgame");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");
let new_btn = document.querySelector(".new-button");

let turn0 = true;

const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetgame = () => {
  turn0 = true;
  enablebox();
  msgcontainer.classList.add("hide");
};

boxes.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (turn0) {
      boxes.innerText = "0";
      turn0 = false;
      boxes.style.color = "red";
    } else {
      boxes.innerText = "X";
      turn0 = true;
    }
    boxes.disabled = true;
    cheakwiiner();
  });
});
const disabledbox = () => {
  for (let box of boxes) {
    box.disabled = ture;
  }
};
const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (Winner) => {
  msg.innerText = `Your are the Winner ${Winner}`;
  msgcontainer.classList.remove("hide");
  disabledbox();
};
const cheakwiiner = () => {
  for (let pattern of arr) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner", pos1val);
        showwinner(pos1val);
      }
    }
  }
};

btnreset.addEventListener("click", resetgame);
new_btn.addEventListener("click", resetgame);
