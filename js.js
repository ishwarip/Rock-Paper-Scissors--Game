let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".click");
const msg =document.querySelector(".msg");

const userscorepara=document.querySelector("#user-sb");
const compscorepara=document.querySelector("#comp-sb");

const gencompchoice=() =>{
    const Options=["rock","paper","scissors"];
     const random=Math.floor(Math.random()*3);
     return Options[random];
};

const drawgame=( ) =>{
    
    msg.innerText= "Game was draw play again, user & computer choice same";

};

const showwiner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
    
    msg.innerText=`You win!  You ${userchoice} beats  computer ${compchoice}`;

}else{
    compscore++;
    compscorepara.innerText=compscore;
    
    msg.innerText=`You loss .  You ${userchoice} beats computer ${compchoice}`;

    }
};

const playgame=(userchoice) =>{
    console.log("user choice",userchoice);
    const compchoice= gencompchoice();
    console.log("comp choice =",compchoice);
    if(userchoice === compchoice) {
        drawgame();
     }else {
        let userwin=true;
        if(userchoice === "rock"){
            userwin=compchoice==="paper" ? false  :true;
        
        }else if(userchoice==="paper"){
            userwin = compchoice ==="scissors" ? false  :true;
        }else{
            userwin=compchoice ==="rock"? false:true
        }
        showwiner(userwin,userchoice,compchoice);
     }
    
    };
    

choices.forEach((click) => {

 click.addEventListener("click" ,()=>{
    const userchoice=click.getAttribute("id");
       playgame(userchoice);
       
      });
});

