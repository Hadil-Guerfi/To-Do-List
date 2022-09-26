
//Selections:
let mainPage=document.querySelector(".main-page");

let bullets=document.querySelectorAll(".bullets span");

// console.log(bullets);

let ToDoTitle=document.querySelector(".heigh-side h2");

// console.log(ToDoTitle);

let aboutTaskIcons=document.querySelectorAll(".about-task i");

// console.log(aboutTaskIcons);

let tasksAdded=document.querySelectorAll(".low-side .task-added");

// console.log(tasksAdded);

let iOptions=document.querySelector(".options i");

// console.log(iOptions);

let colorsIcon=iOptions;
// console.log(colorsIcon);

let modeIcons=document.querySelectorAll(".mode-icon i");
console.log(modeIcons)

let colorsBlock=document.querySelector(".colors-holder");
console.log(colorsBlock);

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


//---------

let colorsHolder=document.querySelector(".colors-holder");
let colorsHolderTitle=document.querySelector(".colors-holder h3");

    modeIcons[1].onclick=function(){
        modeIcons[1].classList.add("desactivated");
        mainPage.style.cssText="background-color:black;";
        colorsHolder.style.cssText="background-color:black;";
        colorsHolderTitle.style.cssText="color:white;";

        if(modeIcons[0].classList.contains("desactivated")===false){
            modeIcons[0].classList.add("activated");

        }
        if(modeIcons[0].classList.contains("desactivated")){
            modeIcons[0].classList.remove("desactivated");
            modeIcons[0].classList.add("activated");

        }
    }

    modeIcons[0].onclick=function(){
        modeIcons[0].classList.add("desactivated");
        mainPage.style.cssText="background-color:white;";
        colorsHolder.style.cssText="background-color:white;";
        colorsHolderTitle.style.cssText="color:black;";

        if(modeIcons[1].classList.contains("desactivated")===false){
            modeIcons[1].classList.add("activated");
        }
        if(modeIcons[1].classList.contains("desactivated")){
            modeIcons[1].classList.remove("desactivated");
            modeIcons[1].classList.add("activated");

        }
    }