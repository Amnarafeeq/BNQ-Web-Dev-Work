const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector(".reset-btn")
const newGamBtn = document.querySelector(".new-btn")
const msgContainer = document.querySelector(".msg-cont")
const msg = document.querySelector("#msg")

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("Clicked");
        if (turnO){
            box.innerText = "O"
            turnO = false
        }else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled  = true
        checkWinner();
    })
})

const disabledBoxes = () => {
    for (let box of boxes){
        box.disabled = true
    }
}

const enabledBoxes = () => {
    for (let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disabledBoxes()
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Value = boxes[pattern[0]].innerText
        let pos2Value = boxes[pattern[1]].innerText
        let pos3Value = boxes[pattern[2]].innerText
        
        if (pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if (pos1Value === pos2Value && pos2Value === pos3Value){
                showWinner(pos1Value)
            }
        }
    }  
}


const resetGame = ()=>{
    turnO = true;
    enabledBoxes()
    msgContainer.classList.add("hide")
}
newGamBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)