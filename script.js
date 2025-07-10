let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#newGame");

let result = document.querySelector("h2");


// ya to x hoga onClick ya O , alternate way me hoga

let turnO = true;

// ek array me winning pattern store kralo bcz 8 hi pattern h jab aap jitoge

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// now applying , event listener on boxes

boxes.forEach((box) =>
{
    box.addEventListener('click' , () => {
        if(turnO === true)
        {
            box.style.color = "cyan";
            box.innerText  = "O";
            turnO = false;
        }
        else
        {
            box.style.color = "rgb(255, 39, 255)";
            
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

function checkWinner()
{
    // select patterns
    for(let pattern of winning)
    {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;


        if(pos1Value != "" && pos2Value != "" &&  pos3Value != "")
        {
            if(pos1Value === pos2Value && pos2Value === pos3Value)
            {
                showWinner(pos1Value);
            }
        }
    }
}
const showWinner = (winner)=>{
    result.classList.add("h2");
    result.innerText = `Winner is : ${winner}`;

    disabledBoxes();
}

function disabledBoxes()
{
    for(let box of boxes)
    {
        box.disabled =  true;
    }
}

// function to reset Game
function enableBoxes()
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}
function gameReset()
{
    turnO = true;
    enableBoxes();
    result.classList.remove("h2");
    result.innerText = "";
}

// on click game will be reset...

rstBtn.addEventListener('click' , gameReset);
newGame.addEventListener('click' , gameReset);