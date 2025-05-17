let uscore=0;
 let cscore=0;
const userscore= document.querySelector("#user-score");
const compscore= document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//function for generating random choice from computer.
//note- we will use math.random to generate random number
const gencomchoice=()=>{
 const options =["rock","paper", "scissor"];
 const num=Math.floor(Math.random()*3);
 return options[num];
}

const draw=()=>{
    console.log("Draw Game!");
    msg.innerText="Game draw! Play again.";
   msg.style.backgroundColor=" #a2cef4";
};

const showWinner=(userwin,userchoice,compchoice)=>{
     
   
    if(userwin){
        console.log("you win!");
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}.`;
         msg.style.backgroundColor="rgb(51, 242, 48)";
       uscore++;
       userscore.innerText=`${uscore}`;
    }
    else { console.log("You lose!");
    msg.innerText=`You lose! ${compchoice} beats Your ${userchoice}.`;
    msg.style.backgroundColor="rgb(228, 71, 71)";
    cscore++;
    compscore.innerText=`${cscore}`;
    }
};

const playgame=(userchoice)=>{
console.log("user choice is ",userchoice);
const compchoice=gencomchoice();
console.log("comp choice is ",compchoice);

if(userchoice===compchoice){
    //draw game
    draw();
}
else{ 
    let userwin=true;
    if(userchoice==="rock"){
        //compchoice can be either paper or scissor
        userwin= compchoice==="paper"?false:true;
    }

     else if(userchoice==="paper"){
        //compchoice can be either rock or scissor
        userwin= compchoice==="scissor"?false:true;
    }
     else {
        //compchoice can be either rock or  paper
        userwin= compchoice==="rock"?false:true;
    }
   
    showWinner(userwin,userchoice,compchoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userchoice=choice.getAttribute("id");  //getting the id of userchoice to use it further
         
        playgame(userchoice);
    });
});