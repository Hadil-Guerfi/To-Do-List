

//probleme dans update de locale storarge from actual one



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

        // editingTask();

       
    }
    
        //test si save btn is oppned:

       

       btnAdd.onclick=function(){

        // if(saveStatus==="block"){

        //     console.log("save before addng task");
        // }

        // else{

        //Acces to span content :
        let taskValue=btnAdd.previousElementSibling.value;

        if(taskValue!==""){

        createTask(taskValue);

        taskToSTorage=createObj(taskValue);
      

        //probleme ici dans added array
        addedArray.push(taskToSTorage);

        console.log(addedArray);


     }

     window.localStorage.setItem("addedArray",JSON.stringify(addedArray));
       
     givingRightToDelet();
     
    //  editingTask();

     btnAdd.previousElementSibling.value="";
          
    // }
        }




    function createTask(taskValue){

        let taskAdded=document.createElement("div");

        taskAdded.classList.add("task-added");

        let spanElt=document.createElement("span");

        spanElt.innerHTML=`${taskValue}`;

        let contentSide=document.createElement("div");

        contentSide.classList.add("contentSide");

        let inputEdit=document.createElement("input");


        contentSide.appendChild(spanElt);

        contentSide.appendChild(inputEdit);

        taskAdded.appendChild(contentSide);


        let iconsDiv=document.createElement("div");

        iconsDiv.classList.add("icons");

        let deleteIcon=document.createElement("i");

        deleteIcon.classList.add("fa-solid")
        
        deleteIcon.classList.add("fa-square-minus")

        deleteIcon.classList.add("delete");



        let editSave=document.createElement("div");

        editSave.classList.add("edit-save");


        let editeIcone=document.createElement("i")

        editeIcone.classList.add("fa-solid")

        editeIcone.classList.add("fa-pen-to-square")


        let saveIcone=document.createElement("i");

        saveIcone.classList.add("fa-solid");
        saveIcone.classList.add("fa-floppy-disk");

        //Adding display:none pour le saveIcon:
        saveIcone.style.display="none";


        editSave.appendChild(editeIcone);
        editSave.appendChild(saveIcone);



        iconsDiv.appendChild(deleteIcon);
        
        iconsDiv.appendChild(editSave);

        // console.log(iconsDiv);

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

    //s'il y un prob c parce que je commente ce qui concerne gettedArrayToDeleteFrom

    // let gettedArrayToDeleteFrom=[];

    let newAddedArray=[];
    
    // gettedArrayToDeleteFrom=JSON.parse(localStorage.getItem("addedArray"));
     
    let deleteBtns=document.querySelectorAll(".delete");
     
    let tasks=document.querySelectorAll(".task-added");

    for(let i=0;i<tasks.length;i++){

        let btnDelete=tasks[i].lastChild.firstChild;

        btnDelete.onclick=function(){

            newAddedArray=[];

            tasks[i].remove();

            //pusher newAddedArray with elements geted from html page

            let tasksAfterDelete=document.querySelectorAll(".task-added");

            // console.log("tasksAfterDelete")
            // console.log(tasksAfterDelete);

            for(let k=0;k<tasksAfterDelete.length;k++){
                
                // console.log("tasks after delete");

                taskCreated=createObj(tasksAfterDelete[k].firstChild.firstChild.innerHTML);

                newAddedArray.push(taskCreated);
                
                // console.log("new added Array :")
                // console.log(newAddedArray);

            }

            window.localStorage.setItem("addedArray",JSON.stringify(newAddedArray));

        }

    }


    }

    let saveStatus;

    //Principe de Local Storage Edit

    function editingTask(){

        let newAddedArray=[];
        
        gettedArrayToDeleteFrom=JSON.parse(localStorage.getItem("addedArray"));
     
        let tasks=document.querySelectorAll(".task-added");

        for(let i=0;i<tasks.length;i++){

            let taskContent=tasks[i].firstChild.firstChild.innerHTML;

        
            let btnEdit=tasks[i].lastChild.lastChild.firstChild;

            let btnSave=tasks[i].lastChild.lastChild.lastChild;

            let spanInEdit=tasks[i].firstChild.firstChild

            let inputInEdit=tasks[i].firstChild.lastChild;

            let taskContentAfterEdit;
        
            // console.log(spanInEdit);
            // console.log(inputInEdit);

            btnEdit.onclick=function(){

            // console.log("hello");
            
            btnEdit.style.display="none";     
            
            btnSave.style.display="block";

            inputInEdit.style.display="block";
            spanInEdit.style.position="absolute";
            
            inputInEdit.value=taskContent;

            inputInEdit.onfocus=function(){
            
                //To give right to write in inpute field


            }


            let style = getComputedStyle(btnSave);
            let btnStatus = style.display
            if(btnStatus==="block"){
                saveStatus="block";
            }

            btnSave.onclick=function(){


                newAddedArray=[];

                //changement de task-content in front of me and in local storage happens only after saveBtn click

                btnEdit.style.display="block";
            
                btnSave.style.display="none";

                inputInEdit.style.display="none";
                spanInEdit.style.position="relative";
    
                let style2 = getComputedStyle(btnSave);
                let btnStatus2 = style.display
                if(btnStatus2==="none"){
                    saveStatus="none";
                }

                taskContentAfterEdit=inputInEdit.value;
                // console.log(taskContentAfterEdit);

                tasks[i].firstChild.firstChild.innerHTML=taskContentAfterEdit;

                let tasksAfterEdite=document.querySelectorAll(".task-added");

                // console.log(tasksAfterEdite);

               for(let j=0;j<tasksAfterEdite.length;j++){
                    
                    console.log(tasks[j].firstChild.firstChild.innerHTML);
                    
                    taskCreated=createObj(tasks[j].firstChild.firstChild.innerHTML);

                    newAddedArray.push(taskCreated);
                }

                window.localStorage.setItem("addedArray",JSON.stringify(newAddedArray));
                console.log("new added array");
                console.log(newAddedArray);
                }




            }
        
        }


    }

















































