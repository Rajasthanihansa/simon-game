let gameSeq=[];
let userSeq=[];

let btns=["red","orange","green","purple"];

let started=false;
let level=0;
let highScore=0;//homework h bhai ye

h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("game started");
        levelUp();
    }
  
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

 function levelUp()
 {
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    //random button choose
    let randomInx=Math.floor(Math.random()*3);
    let randomColor=btns[randomInx];
    let randomBtn=document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randomBtn);

 }

 function checkAns(inx){
    //------------------chatgpt----------------------
    // Toh loop kyun nahi chahiye?
    // Kyunki:
    
    // Hum har click pe ek-ek index check kar rahe hain
    
    // Loop tab hota jab hum sare index ek sath check karte
    
    // Yahan hum step-by-step check kar rahe hain
    //jab jab btnpressed huwa tab tab checkans function call huwa
    // --------------------------------------------------------
    // ⚙️JavaScript works on event-driven model
    // Iska matlab?
    // JavaScript code kuch kar ke rukta nahi — woh bas event ka wait karta hai.
    // Jaise:
    
    // "User key dabaye"
    // "User button click kare"
    // "Timer poora ho"
    // --------------------------------------------------------
    if(userSeq[inx]== gameSeq[inx])
    {
        if(gameSeq.length==userSeq.length)
        {
            setTimeout(levelUp,1000);//agr dono color ik sath flash honge to dikhenge nhi isliye thoda delay dal diya
        }
    }else{
        //to change background color to red
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },200);

        
        if(level>highScore)//homwork ka part
            {
                highScore=level;
                h2.innerHTML=`<b> higher score:${level}</b><br>🎉🎊🙌✨🎈🥳💥<br>press any key to start`;
            }else{
                h2.innerText=`Game over, press any key to start YOUR SCORE:${level}`;
            }

        reset();
    }
 }

 function btnPressed(){
    let btn=this;
    userFlash(btn);

    let btnColor=this.getAttribute("id");
    userSeq.push(btnColor);

    checkAns(userSeq.length-1);
 }
//---------------------------------------------------->
//hansa ka logic 
//  function btnPressed(event){
//    let btnClass=event.target.classList[0];
//    userFlash(document.querySelector(`.${btnClass}`));
//  }
//----------------------------------------------------->

 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPressed);
 }

 function reset(){
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
 }
