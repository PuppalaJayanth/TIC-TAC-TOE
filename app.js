let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX player0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = "true";
        }
         box.disabled = true;

         checkwinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};  


const checkwinner = () => {
    for (let pattern of winpatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
       // console.log(boxes[pattern[0]], boxes[pattern[0]], boxes[pattern[0]]);
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;


       if (pos1val != "" && pos2val != "" && pos3val !="") {
        if (pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
        }
       }
    }
};



newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);