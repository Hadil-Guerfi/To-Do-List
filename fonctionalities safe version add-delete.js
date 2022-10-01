

    //Principe de Local Storage ADD


    let btnAdd =document.querySelector(".create-task .input-field i");

    let lowSide=document.querySelector(".low-side");

    let addedArray=[];//to store in local storage




    let gettedArray=JSON.parse(window.localStorage.getItem("addedArray"));

    if(gettedArray!==null){

        for(let i=0;i<gettedArray.length;i++){
            
            createTask(gettedArray[i].content);

            let newTask=createObj(gettedArray[i].content);

            addedArray.push(newTask);
        }

        // givingRightToDelet(); 

        givingRightToDelet();

       
    }


    btnAdd.onclick=function(){


        let taskValue=btnAdd.previousElementSibling.value;

        if(taskValue!==""){

        createTask(taskValue);

        taskToSTorage=createObj(taskValue);

        addedArray.push(taskToSTorage);


     }
     givingRightToDelet();

     window.localStorage.setItem("addedArray",JSON.stringify(addedArray));

     btnAdd.previousElementSibling.value="";
     
    }





    function createTask(taskValue){

        let taskAdded=document.createElement("div");

        taskAdded.classList.add("task-added");

        let spanElt=document.createElement("span");

        spanElt.innerHTML=`${taskValue}`;

        taskAdded.appendChild(spanElt);

        let iconsDiv=document.createElement("div");

        iconsDiv.classList.add("icons");

        let deleteIcon=document.createElement("i");

        deleteIcon.classList.add("fa-solid")
        
        deleteIcon.classList.add("fa-square-minus")

        deleteIcon.classList.add("delete");


        let editeIcone=document.createElement("i")

        editeIcone.classList.add("fa-solid")

        editeIcone.classList.add("fa-pen-to-square")

        let saveIcone=document.createElement("i");

        saveIcone.classList.add("fa-solid");
        saveIcone.classList.add("fa-floppy-disk");

        iconsDiv.appendChild(deleteIcon);
        iconsDiv.appendChild(editeIcone);
        iconsDiv.appendChild(saveIcone);

        taskAdded.appendChild(iconsDiv);
        lowSide.appendChild(taskAdded);
     

    }

function createObj(taskValue){
    let taskToSTorage={
        class:"task-added",
        id:Date.now(),
        content:taskValue,

    }

    return taskToSTorage;
}


    //Principe de Local Storage Delete


    function givingRightToDelet(){

    let gettedArrayToDeleteFrom=[];

    let newAddedArray=[];
    
    gettedArrayToDeleteFrom=JSON.parse(localStorage.getItem("addedArray"));
     
    let deleteBtns=document.querySelectorAll(".delete");
     
    let tasks=document.querySelectorAll(".task-added");

    for(let i=0;i<tasks.length;i++){

        let btnDelete=tasks[i].lastChild.firstChild;

        btnDelete.onclick=function(){

            newAddedArray=[];

            tasks[i].remove();

            let tasksAfterDelete=document.querySelectorAll(".task-added");

            console.log("tasksAfterDelete")
            console.log(tasksAfterDelete);

            for(let k=0;k<tasksAfterDelete.length;k++){
                
                console.log("tasks after delete");

                tasksAfterDelete[k].firstChild.innerHTML;

                taskCreated=createObj(tasksAfterDelete[k].firstChild.innerHTML);

                newAddedArray.push(taskCreated);
                
                console.log("new added Array :")
                console.log(newAddedArray);

            }

            window.localStorage.setItem("addedArray",JSON.stringify(newAddedArray));

        }

    }


    }


