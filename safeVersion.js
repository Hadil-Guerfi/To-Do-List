
//Selections:
let mainPage=document.querySelector(".main-page");

let bullets=document.querySelectorAll(".bullets span");

let ToDoTitle=document.querySelector(".heigh-side h2");

let aboutTaskIcons=document.querySelectorAll(".about-task i");

let tasksAdded=document.querySelectorAll(".low-side .task-added");

let iOptions=document.querySelector(".options i");

let colorsIcon=iOptions;

let modeIcons=document.querySelectorAll(".mode-icon i");

let colorsBlock=document.querySelector(".colors-holder");

    bullets[0].dataset.color="rgb(252, 175, 188)";
    bullets[1].dataset.color="rgb(102, 175, 235)";
    bullets[2].dataset.color="rgb(112, 194, 190)";
    bullets[3].dataset.color="rgb(177, 142, 211)";
    bullets[4].dataset.color="rgb(240, 175, 101)";

//Deal With Colors:
for(let i=0;i<bullets.length;i++){
    bullets[i].onclick=function(){
        ToDoTitle.style.color=`${bullets[i].dataset.color}`;
        for(let j=0;j<2;j++){
            aboutTaskIcons[j].style.color=`${bullets[i].dataset.color}`;
        }
        for(let k=0;k<tasksAdded.length;k++){
            tasksAdded[k].style.cssText=`background-color:${bullets[i].dataset.color};`;
            
        }
        //Set main-color in local storage
        window.localStorage.setItem("main-color",`${bullets[i].dataset.color}`);

    }
}


        //Get main-color in local storage

    let mainColor=window.localStorage.getItem("main-color");

    ToDoTitle.style.color=`${mainColor}`;
    for(let j=0;j<2;j++){
        aboutTaskIcons[j].style.color=`${mainColor}`;
    }
    for(let k=0;k<tasksAdded.length;k++){
        tasksAdded[k].style.cssText=`background-color:${mainColor};`;
        
    }


    colorsIcon.onclick=function(){
        colorsBlock.classList.toggle("show");
    }


//Dark and light mode

let colorsHolder=document.querySelector(".colors-holder");
let colorsHolderTitle=document.querySelector(".colors-holder h3");
let input1=document.querySelector(".heigh-side .input-field input");
let input2=document.querySelectorAll("input")[1];

    modeIcons[1].onclick=function(){
        modeIcons[1].classList.add("desactivated");
        mainPage.style.cssText="background-color:black;";
        colorsHolder.style.cssText="background-color:black;";
        colorsHolderTitle.style.cssText="color:white;";

        input1.style.cssText="background:black;";
        input2.style.cssText="background:black;";
        
        input1.style.color="white";
        input2.style.color="white";


        window.localStorage.setItem("BackColor","black");
        window.localStorage.setItem("FontColor","white");

        if(modeIcons[0].classList.contains("desactivated")===false){
            modeIcons[0].classList.add("activated");

        }
        else{
            modeIcons[0].classList.remove("desactivated");
            modeIcons[0].classList.add("activated");

        }
    }

    

    modeIcons[0].onclick=function(){
        modeIcons[0].classList.add("desactivated");

        mainPage.style.cssText="background-color:white;";
        colorsHolder.style.cssText="background-color:white;";
        colorsHolderTitle.style.cssText="color:black;";
        
        input1.style.cssText="background:white;";
        input2.style.cssText="background:white;";
        
        input1.style.color="black";
        input2.style.color="black";
       
        window.localStorage.setItem("BackColor","white");
        window.localStorage.setItem("FontColor","black");

        if(modeIcons[1].classList.contains("desactivated")===false){
            modeIcons[1].classList.add("activated");
        }
        else{
            modeIcons[1].classList.remove("desactivated");
            modeIcons[1].classList.add("activated");

        }
    }


    let BackColor=window.localStorage.getItem("BackColor");

    if(BackColor==="black"){
        modeIcons[1].classList.add("desactivated");
        modeIcons[0].classList.add("activated");

    }

    let FontColor=window.localStorage.getItem("FontColor");

    mainPage.style.cssText=`background-color:${BackColor};`;
    colorsHolder.style.cssText=`background-color:${BackColor};`;
    colorsHolderTitle.style.cssText=`color:${FontColor};`;
  
    input1.style.cssText=`background-color:${BackColor};`;
    input2.style.cssText=`background-color:${BackColor};`;
    
    input1.style.color=`color:${FontColor};`;
    input2.style.color=`color:${FontColor};`;


   //Randomly Change Background

   //    background-image: url(/images/study1.jfif);

  //    .high-side-back::before


    let hideSide=document.querySelector(".high-side-back");

    console.log(hideSide);


