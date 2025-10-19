let boxes = document.querySelectorAll(".box");
let rstbtn =  document.querySelector("#rst");
let newgamebtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [2,4,5],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box clicked!");
    if(turnO == true ){
        box.innerText = "O";
        turnO = false;
    } else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText ="";
    }
}
const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showwinner = (winner) =>{
    msg.innerText = "Winner is " + winner;
    msgcontainer.classList.remove("hide");
    
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1===pos2 && pos2 == pos3){
                showwinner(pos1);
                disabledboxes();
            }
        }

    }
}

newgamebtn.addEventListener("click" , resetgame);
rstbtn.addEventListener("click" , resetgame);


let btn = document.querySelector("#mode");
let body = document.querySelector("body");

let current = "light";

btn.addEventListener("click" , ()=> {
    if(current==="light"){
        current = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        console.log("dark");
        
    }
    else{
        current = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        console.log("light");
        
    }  
})


